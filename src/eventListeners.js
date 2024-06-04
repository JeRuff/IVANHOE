//EVENTS//
plane.addEventListener("ended", onPlaneAnimEnded);
btnPhase2.addEventListener("click", phase2Click);
phase2Outline.addEventListener("ended", onPhase2OutlineEnded);
btnFactory.addEventListener("mouseup", factoryMouseUp);
btnFactory.addEventListener("click", factoryClick);


truck.addEventListener("ended", onTruckEnded);
transmissionLinesAnim.addEventListener("ended", onTransmissionLinesEnded);
car01.addEventListener("ended", onCar01Ended);
car02.addEventListener("ended", onCar02Ended);
train.addEventListener("ended", onTrainAnimEnded);


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