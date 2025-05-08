//EVENTS//

btnPhase2.addEventListener("click", phase2Click);
btnFactory.addEventListener("mouseup", factoryMouseUp);
btnFactory.addEventListener("click", factoryClick);

transmissionLinesSVG.addEventListener("load", transmissionLineSVGStyle, false);
santaCruzOutlineSVG.addEventListener("load", outlineSVGStyle, false);

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
        exploreTextAnim(exploreTextArray,Math.floor(Math.random() * (5000 - 1000) + 5000),event.animationName);
});

btnPhase2Holder.addEventListener("animationend", function(event){
    if(event.animationName == "slide-fwd-center")
        {
            console.log("phase2 ended");
            window.location = 'phase2.html';
        }
  });


window.addEventListener("resize", (event) => {

    const container = document.getElementById("phase1itemsContainer");
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    const truckPathString = document.getElementById('truckPath').contentDocument.getElementById('truck-path').getElementsByTagName('path')[0].getAttribute("d");
    const car01PathString = document.getElementById('car01Path').contentDocument.getElementById('car01-path').getElementsByTagName('path')[0].getAttribute("d");
    const car02PathString = document.getElementById('car02Path').contentDocument.getElementById('car02-path').getElementsByTagName('path')[0].getAttribute("d");

    svgPathResponsivness(truckPathString, truck, "truckSVG",initWidth, initHeight, containerWidth, containerHeight);
    svgPathResponsivness(car01PathString, car01, "car01SVG",initWidth, initHeight, containerWidth, containerHeight);
    svgPathResponsivness(car02PathString, car02, "car02SVG",initWidth, initHeight, containerWidth, containerHeight);
});