(function(){
  var root=document.documentElement;
  var body=document.body;

  function setPointer(event){
    root.style.setProperty('--pointer-x',event.clientX+'px');
    root.style.setProperty('--pointer-y',event.clientY+'px');
    root.style.setProperty('--aura-opacity','1');
  }
  if(window.matchMedia('(pointer:fine)').matches){
    window.addEventListener('pointermove',setPointer,{passive:true});
    document.addEventListener('mouseleave',function(){root.style.setProperty('--aura-opacity','0')});
  }

  function svgPath(values,minY,maxY){
    var left=46,top=22,width=548,height=224;
    return values.map(function(value,index){
      var x=left+(index/(values.length-1))*width;
      var y=top+(1-(value-minY)/(maxY-minY))*height;
      return (index?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);
    }).join(' ');
  }

  function svgArea(values,minY,maxY,baseValue){
    var line=svgPath(values,minY,maxY);
    var left=46,top=22,width=548,height=224;
    var baseY=top+(1-(baseValue-minY)/(maxY-minY))*height;
    return line+' L '+(left+width).toFixed(1)+' '+baseY.toFixed(1)+' L '+left+' '+baseY.toFixed(1)+' Z';
  }

  var quantLab=document.querySelector('[data-quant-lab]');
  if(quantLab){
    var inventoryInput=quantLab.querySelector('[data-q-inventory]');
    var volInput=quantLab.querySelector('[data-q-vol]');
    var gammaInput=quantLab.querySelector('[data-q-gamma]');
    var inventoryOut=quantLab.querySelector('[data-q-inventory-out]');
    var volOut=quantLab.querySelector('[data-q-vol-out]');
    var gammaOut=quantLab.querySelector('[data-q-gamma-out]');
    var reservationPath=quantLab.querySelector('[data-q-reservation-line]');
    var bidPath=quantLab.querySelector('[data-q-bid]');
    var askPath=quantLab.querySelector('[data-q-ask]');
    var marker=quantLab.querySelector('[data-q-marker]');
    var reservationOut=quantLab.querySelector('[data-q-reservation]');
    var spreadOut=quantLab.querySelector('[data-q-spread]');
    var quotesOut=quantLab.querySelector('[data-q-quotes]');
    var yMaxOut=quantLab.querySelector('[data-q-ymax]');
    var yMinOut=quantLab.querySelector('[data-q-ymin]');

    function signed(value){
      return (value>=0?'+':'−')+Math.abs(value).toFixed(2);
    }

    function updateQuant(){
      var inventory=Number(inventoryInput.value)/100;
      var sigma=Number(volInput.value)/10;
      var gamma=Number(gammaInput.value)/1000;
      var tau=1;
      var kappa=.35;
      var riskTerm=gamma*sigma*sigma*tau;
      var halfSpread=.5*riskTerm+(1/gamma)*Math.log(1+gamma/kappa);
      var reservations=[];
      var bids=[];
      var asks=[];
      for(var i=0;i<81;i++){
        var q=-1+(i/80)*2;
        var reservation=-q*riskTerm;
        reservations.push(reservation);
        bids.push(reservation-halfSpread);
        asks.push(reservation+halfSpread);
      }
      var currentReservation=-inventory*riskTerm;
      var currentBid=currentReservation-halfSpread;
      var currentAsk=currentReservation+halfSpread;
      var plotBound=Math.max(8,riskTerm+halfSpread)*1.12;
      inventoryOut.textContent=(inventory>=0?'+':'−')+Math.abs(inventory).toFixed(2);
      volOut.textContent=sigma.toFixed(1)+' bps';
      gammaOut.textContent=gamma.toFixed(3)+' / bps';
      reservationOut.textContent=signed(currentReservation)+' bps';
      spreadOut.textContent=(2*halfSpread).toFixed(2)+' bps';
      quotesOut.textContent=signed(currentBid)+' / '+signed(currentAsk);
      reservationPath.setAttribute('d',svgPath(reservations,-plotBound,plotBound));
      bidPath.setAttribute('d',svgPath(bids,-plotBound,plotBound));
      askPath.setAttribute('d',svgPath(asks,-plotBound,plotBound));
      var markerX=46+((inventory+1)/2)*548;
      marker.setAttribute('x1',markerX.toFixed(1));
      marker.setAttribute('x2',markerX.toFixed(1));
      yMaxOut.textContent='+'+plotBound.toFixed(0);
      yMinOut.textContent='−'+plotBound.toFixed(0);
    }
    inventoryInput.addEventListener('input',updateQuant);
    volInput.addEventListener('input',updateQuant);
    gammaInput.addEventListener('input',updateQuant);
    updateQuant();
  }

  var academicLab=document.querySelector('[data-academic-lab]');
  if(academicLab){
    var sigmaInput=academicLab.querySelector('[data-a-sigma]');
    var reconInput=academicLab.querySelector('[data-a-recon]');
    var sigmaOut=academicLab.querySelector('[data-a-sigma-out]');
    var reconOut=academicLab.querySelector('[data-a-recon-out]');
    var observedPath=academicLab.querySelector('[data-a-observed]');
    var idealPath=academicLab.querySelector('[data-a-ideal]');
    var areaPath=academicLab.querySelector('[data-a-fill]');
    var contrastOut=academicLab.querySelector('[data-a-contrast]');
    var dampingOut=academicLab.querySelector('[data-a-damping]');
    var recoveryOut=academicLab.querySelector('[data-a-recovery]');

    function updateAcademic(){
      var sigma=Number(sigmaInput.value)/1000;
      var recon=Number(reconInput.value)/100;
      var ideal=[];
      var observed=[];
      var meanDamping=0;
      for(var i=0;i<90;i++){
        var k=.02+(i/89)*.33;
        var envelope=.86*Math.exp(-1.55*k)+.18;
        var wiggle=.095*Math.sin(78*k)*Math.exp(-1.35*k);
        var damping=Math.exp(-Math.pow(k*sigma*31,2));
        var recovered=damping+(1-damping)*recon*.78;
        ideal.push(envelope+wiggle);
        observed.push(envelope+wiggle*recovered);
        meanDamping+=recovered;
      }
      meanDamping/=90;
      sigmaOut.textContent='σz = '+sigma.toFixed(3);
      reconOut.textContent=Math.round(recon*100)+'%';
      contrastOut.textContent=Math.round(meanDamping*100)+'%';
      dampingOut.textContent=(sigma*31).toFixed(2)+' k';
      recoveryOut.textContent=Math.round(recon*78)+'%';
      idealPath.setAttribute('d',svgPath(ideal,.55,1.08));
      observedPath.setAttribute('d',svgPath(observed,.55,1.08));
      areaPath.setAttribute('d',svgArea(observed,.55,1.08,.55));
    }
    sigmaInput.addEventListener('input',updateAcademic);
    reconInput.addEventListener('input',updateAcademic);
    updateAcademic();
  }

  function parseSimpleCsv(text){
    var lines=text.replace(/^\uFEFF/,'').split(/\r?\n/).filter(function(line){return line.trim()});
    if(!lines.length){return {headers:[],rows:[]}}
    var headers=lines[0].split(',').map(function(value){return value.trim()});
    var rows=lines.slice(1).map(function(line){
      var values=line.split(',');
      var row={};
      headers.forEach(function(header,index){row[header]=(values[index]||'').trim()});
      return row;
    });
    return {headers:headers,rows:rows};
  }

  var executionLab=document.querySelector('[data-execution-lab]');
  if(executionLab){
    var executionWindow=executionLab.querySelector('[data-exec-window]');
    var executionDay=executionLab.querySelector('[data-exec-day]');
    var executionDate=executionLab.querySelector('[data-exec-date]');
    var executionSlippage=executionLab.querySelector('[data-exec-slippage]');
    var executionFill=executionLab.querySelector('[data-exec-fill]');
    var executionIs=executionLab.querySelector('[data-exec-is]');
    var executionSlipPath=executionLab.querySelector('[data-exec-slip-path]');
    var executionIsPath=executionLab.querySelector('[data-exec-is-path]');
    var executionMarker=executionLab.querySelector('[data-exec-marker]');
    var executionFile=executionLab.querySelector('[data-exec-file]');
    var executionFileStatus=executionLab.querySelector('[data-exec-file-status]');
    var executionState=executionLab.querySelector('[data-exec-state]');
    var executionData=[];

    for(var executionIndex=0;executionIndex<120;executionIndex++){
      var cycle=Math.sin(executionIndex*.29)*.62;
      var microNoise=(((executionIndex*17)%13)-6)*.075;
      var demoSlippage=1.25+cycle+microNoise;
      var demoIs=demoSlippage+.42+Math.sin(executionIndex*.13)*.28;
      var demoFill=93.5+Math.cos(executionIndex*.21)*2.8-((executionIndex*7)%5)*.16;
      executionData.push({
        date:'DEMO DAY '+String(executionIndex+1).padStart(3,'0'),
        slippage:demoSlippage,
        fill:demoFill,
        implementationShortfall:demoIs
      });
    }

    function executionPath(values){
      var left=48,top=28,width=648,height=204,min=-4,max=6;
      return values.map(function(value,index){
        var x=left+(index/Math.max(1,values.length-1))*width;
        var y=top+(1-(value-min)/(max-min))*height;
        return (index?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);
      }).join(' ');
    }

    function renderExecution(){
      var selected=Math.min(Number(executionDay.value),executionData.length-1);
      var selectedRow=executionData[selected];
      var visibleCount=Math.min(Number(executionWindow.value),executionData.length);
      var start=Math.max(0,selected-visibleCount+1);
      var visible=executionData.slice(start,selected+1);
      executionSlipPath.setAttribute('d',executionPath(visible.map(function(row){return row.slippage})));
      executionIsPath.setAttribute('d',executionPath(visible.map(function(row){return row.implementationShortfall})));
      executionMarker.setAttribute('x1','696');
      executionMarker.setAttribute('x2','696');
      executionDate.textContent=selectedRow.date;
      executionSlippage.textContent=selectedRow.slippage.toFixed(2)+' bps';
      executionFill.textContent=selectedRow.fill.toFixed(1)+'%';
      executionIs.textContent=selectedRow.implementationShortfall.toFixed(2)+' bps';
    }

    function loadExecutionCsv(text){
      var parsed=parseSimpleCsv(text);
      var required=['date','slippage_bps','fill_rate','implementation_shortfall_bps'];
      var missing=required.filter(function(header){return parsed.headers.indexOf(header)===-1});
      if(missing.length){throw new Error('Missing '+missing.join(', '))}
      var nextData=parsed.rows.map(function(row){
        var fill=Number(row.fill_rate);
        if(fill<=1){fill*=100}
        return {
          date:row.date,
          slippage:Number(row.slippage_bps),
          fill:fill,
          implementationShortfall:Number(row.implementation_shortfall_bps)
        };
      }).filter(function(row){return row.date&&[row.slippage,row.fill,row.implementationShortfall].every(Number.isFinite)});
      if(nextData.length<2){throw new Error('Need at least two valid rows')}
      executionData=nextData;
      executionDay.max=String(nextData.length-1);
      executionDay.value=String(nextData.length-1);
      executionState.textContent='LOCAL DATA';
      executionFileStatus.textContent=nextData.length+' rows loaded locally. No data was uploaded.';
      renderExecution();
    }

    executionWindow.addEventListener('change',renderExecution);
    executionDay.addEventListener('input',renderExecution);
    executionFile.addEventListener('change',function(){
      var file=executionFile.files&&executionFile.files[0];
      if(!file){return}
      var reader=new FileReader();
      reader.onload=function(){
        try{loadExecutionCsv(String(reader.result||''))}
        catch(error){executionState.textContent='CHECK FILE';executionFileStatus.textContent=error.message}
      };
      reader.onerror=function(){executionState.textContent='CHECK FILE';executionFileStatus.textContent='The file could not be read.'};
      reader.readAsText(file);
    });
    renderExecution();
  }

  var lstmLab=document.querySelector('[data-lstm-lab]');
  if(lstmLab){
    var lstmNodes=lstmLab.querySelectorAll('[data-lstm-node]');
    var lstmTitle=lstmLab.querySelector('[data-lstm-detail-title]');
    var lstmCopy=lstmLab.querySelector('[data-lstm-detail-copy]');
    var lstmOutput=lstmLab.querySelector('[data-lstm-detail-output]');
    lstmNodes.forEach(function(node){
      node.addEventListener('click',function(){
        lstmNodes.forEach(function(other){other.classList.toggle('is-active',other===node)});
        lstmTitle.textContent=node.dataset.title;
        lstmCopy.textContent=node.dataset.copy;
        lstmOutput.textContent='OUTPUT // '+node.dataset.output;
      });
    });
  }

  var riskLab=document.querySelector('[data-risk-lab]');
  if(riskLab){
    var riskShock=riskLab.querySelector('[data-risk-shock]');
    var riskExposure=riskLab.querySelector('[data-risk-exposure]');
    var riskShockOut=riskLab.querySelector('[data-risk-shock-out]');
    var riskExposureOut=riskLab.querySelector('[data-risk-exposure-out]');
    var riskFull=riskLab.querySelector('[data-risk-full]');
    var riskManaged=riskLab.querySelector('[data-risk-managed]');
    var riskSaved=riskLab.querySelector('[data-risk-saved]');
    var riskFullBar=riskLab.querySelector('[data-risk-full-bar]');
    var riskManagedBar=riskLab.querySelector('[data-risk-managed-bar]');

    function updateRisk(){
      var shock=Number(riskShock.value);
      var exposure=Number(riskExposure.value);
      var managed=shock*exposure/100;
      var saved=shock-managed;
      riskShockOut.textContent=shock.toFixed(0)+'%';
      riskExposureOut.textContent=exposure.toFixed(0)+'%';
      riskFull.textContent='−'+shock.toFixed(1)+'%';
      riskManaged.textContent='−'+managed.toFixed(1)+'%';
      riskSaved.textContent=saved.toFixed(1)+' pp';
      riskFullBar.style.width=Math.min(100,shock/45*100).toFixed(1)+'%';
      riskManagedBar.style.width=Math.min(100,managed/45*100).toFixed(1)+'%';
    }
    riskShock.addEventListener('input',updateRisk);
    riskExposure.addEventListener('input',updateRisk);
    updateRisk();
  }

  var marketMakingIngest=document.querySelector('[data-mm-ingest]');
  if(marketMakingIngest){
    var marketMakingFile=marketMakingIngest.querySelector('[data-mm-file]');
    var marketMakingStatus=marketMakingIngest.querySelector('[data-mm-status]');
    var marketMakingRows=marketMakingIngest.querySelector('[data-mm-rows]');
    var marketMakingColumns=marketMakingIngest.querySelector('[data-mm-columns]');
    var marketMakingState=marketMakingIngest.querySelector('[data-mm-state]');
    var marketMakingRequired=['timestamp','equity','equity_no_fee','position','price'];
    marketMakingFile.addEventListener('change',function(){
      var file=marketMakingFile.files&&marketMakingFile.files[0];
      if(!file){return}
      var reader=new FileReader();
      reader.onload=function(){
        var parsed=parseSimpleCsv(String(reader.result||''));
        var present=marketMakingRequired.filter(function(header){return parsed.headers.indexOf(header)!==-1});
        var missing=marketMakingRequired.filter(function(header){return parsed.headers.indexOf(header)===-1});
        marketMakingRows.textContent=String(parsed.rows.length);
        marketMakingColumns.textContent=present.length+' / '+marketMakingRequired.length;
        if(missing.length){
          marketMakingState.textContent='CHECK SCHEMA';
          marketMakingStatus.textContent='Missing '+missing.join(', ')+'. No data was uploaded.';
        }else{
          marketMakingState.textContent='READY';
          marketMakingStatus.textContent=parsed.rows.length+' rows validated locally. No data was uploaded.';
        }
      };
      reader.onerror=function(){marketMakingState.textContent='CHECK FILE';marketMakingStatus.textContent='The file could not be read.'};
      reader.readAsText(file);
    });
  }

  var imageInspector=document.querySelector('[data-image-inspector]');
  if(imageInspector){
    var imageOpen=document.querySelector('[data-image-open]');
    var imageClose=imageInspector.querySelector('[data-image-close]');
    var imageZoom=imageInspector.querySelector('[data-image-zoom]');
    var imageZoomOutput=imageInspector.querySelector('[data-image-zoom-output]');
    var imageTarget=imageInspector.querySelector('[data-image-target]');

    function updateImageZoom(){
      imageTarget.style.width=imageZoom.value+'%';
      imageZoomOutput.textContent=imageZoom.value+'%';
    }

    imageOpen.addEventListener('click',function(){
      imageZoom.value='100';
      updateImageZoom();
      imageInspector.showModal();
    });
    imageClose.addEventListener('click',function(){imageInspector.close()});
    imageZoom.addEventListener('input',updateImageZoom);
    imageInspector.addEventListener('click',function(event){
      if(event.target===imageInspector){imageInspector.close()}
    });
    updateImageZoom();
  }

  document.querySelectorAll('img[data-logo]').forEach(function(image){
    image.addEventListener('error',function(){
      var tile=image.closest('.logo-tile,.org-mark');
      if(tile){tile.hidden=true}
    });
  });

  body.classList.add('interface-ready');
})();
