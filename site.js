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

  document.querySelectorAll('img[data-logo]').forEach(function(image){
    image.addEventListener('error',function(){
      var tile=image.closest('.logo-tile,.org-mark');
      if(tile){tile.hidden=true}
    });
  });

  body.classList.add('interface-ready');
})();
