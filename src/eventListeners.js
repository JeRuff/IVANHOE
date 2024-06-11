//EVENTS//
/* plane.addEventListener("ended", onPlaneAnimEnded);
 */
/* plane.addEventListener("animationend", onPlaneAnimationEnded, false);
 */btnPhase2.addEventListener("click", phase2Click);
btnFactory.addEventListener("mouseup", factoryMouseUp);
btnFactory.addEventListener("click", factoryClick);


transmissionLinesSVG.addEventListener("animationend", onTransmissionLinesEnded, false);

plane.addEventListener("animationend", function(event){
    onAnimationEnded(event, this, "planeAnim",Math.floor(Math.random() * (25000 - 15000) + 15000));
});

truck.addEventListener("animationend", function(event){
    onAnimationEnded(event, this, "truckFollowPath",18000);
});

car01.addEventListener("animationend", function(event){
    onAnimationEnded(event, this, "car01PathAnim",18000);
});

car02.addEventListener("animationend", function(event){
    onAnimationEnded(event, this, "car02PathAnim",12000);
});

train.addEventListener("animationend", function(event){
    onAnimationEnded(event, this, "trainSVGAnim",20000);
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