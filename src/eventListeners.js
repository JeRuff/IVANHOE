//EVENTS//
plane.addEventListener("ended", planeAnimHandler);
btnImgPhase2.addEventListener("click", phase2Click);
phase2Outline.addEventListener("ended", onPhase2OutlineEnded);
btnFactory.addEventListener("mouseup", factoryMouseUp);
btnFactory.addEventListener("click", factoryClick);


truck.addEventListener("ended", function(e){
    playNextAnim(document.getElementById(e.target.id));
    console.log(e.target.id);      
   });

transmissionLinesAnim.addEventListener("ended", function(e){
    playNextAnim(document.getElementById(e.target.id));
    console.log(e.target.id);      
   });

train.addEventListener("ended", function(e){
    playNextAnim(document.getElementById(e.target.id));
    console.log(e.target.id);      
   });

cars.addEventListener("ended", function(e){
    playNextAnim(document.getElementById(e.target.id));
    console.log(e.target.id);      
   });

cruzText.addEventListener("animationend", function(){
    console.log("text animation from handler");
    exploreTextAnim(exploreTextArray,Math.floor(Math.random() * (5000 - 1000) + 5000));
});

btnPhase2Holder.addEventListener("animationend", function(event){
    if(event.animationName == "slide-fwd-center")
        {
            console.log("phase2 ended");
            window.location = 'phase2.html';
        }
  });