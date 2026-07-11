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
