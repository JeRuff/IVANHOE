//EVENTS//
/* plane.addEventListener("ended", onPlaneAnimEnded);
 */
plane.addEventListener("animationend", onPlaneAnimationEnded, false);
btnPhase2.addEventListener("click", phase2Click);
btnFactory.addEventListener("mouseup", factoryMouseUp);
btnFactory.addEventListener("click", factoryClick);


car01.addEventListener("ended",   function (){
    onAnimationEnded(car01, 18000)
});
car02.addEventListener("ended",   function (){
    onAnimationEnded(car02, 12000)
});


cruzText.addEventListener("animationend", function(event){
        console.log("text animation from cruz event listener");
        exploreTextAnim(exploreTextArray,Math.floor(Math.random() * (5000 - 1000) + 5000),event.animationName);
        //fadeInExploreText(elementArray[i],delay*((i/20)+1));
});

btnPhase2Holder.addEventListener("animationend", function(event){
    if(event.animationName == "slide-fwd-center")
        {
            console.log("phase2 ended");
            window.location = 'phase2.html';
        }
  });