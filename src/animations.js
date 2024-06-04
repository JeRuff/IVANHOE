function phase2Click(){
    console.log("start phase 2");
     //Stop Video
    stop(phase2Outline);

/*  btnPhase2.style.opacity = 1
    btnPhase2.classList.remove("animate__animated");
    btnPhase2.classList.remove("animate__fadeIn"); */

    btnPhase2Holder.classList.add("slide-fwd-center");
    exploreTextHolder.classList.add("fade-out");
}

function factoryClick(){
    btnFactory.classList.remove("animate__fadeIn");
    btnFactory.classList.add("animate__pulse");
}

function factoryMouseUp(){
    btnFactory.classList.remove("animate__pulse");
}

function playNextAnim(element){
    //console.log("playNextAnim " + element);
    stop(element);

    //create temp array to avoid playing same animation back to back
    var tempArray = randomAnimationArray;

    const index = tempArray.indexOf(5);
    if (index > -1) { // only splice array when item is found
        tempArray.splice(index, 1); // 2nd parameter means remove one item only
    }

    play(randomAnimationSelect(tempArray));
    play(randomAnimationSelect(tempArray));
}

function onPlaneAnimEnded(){

    //Plane is first anim, trigger other anims now to get the ball rolling ;)
    //Only repeat every 15~25 seconds
    var randomDelay = Math.floor(Math.random() * (25000 - 15000) + 15000);
    console.log("plane will play in " + randomDelay + " ms");
    stop(plane);

    //wait random and play again
    var int = setInterval(() => {
        play(plane);
    }, randomDelay);
    setTimeout(() => {
        clearInterval(int);
    }, randomDelay);
}

function onTransmissionLinesEnded(){
    console.log("transmissionLine will play in 25000  ms");
    // Only plays every 25 seconds
    stop(transmissionLinesAnim);
    //wait delay and play again
    var int = setInterval(() => {
        play(transmissionLinesAnim);
    }, 25000);
    setTimeout(() => {
        clearInterval(int);
    }, 25000);
}

function onTruckEnded(){
    console.log("truckAnim will play in 18000 ms");
    // Only plays every 18 seconds
    stop(truck);
    //wait delay and play again
    var int = setInterval(() => {
        play(truck);
    }, 18000);
    setTimeout(() => {
        clearInterval(int);
    }, 18000);
}

function onCar01Ended(){
    console.log("Car01 will play in 18000 ms");
    // Only plays every 18 seconds
    stop(car01);
    //wait delay and play again
    var int = setInterval(() => {
        play(car01);
    }, 18000);
    setTimeout(() => {
        clearInterval(int);
    }, 18000);
}

function onCar02Ended(){
    console.log("Car02 will play in 12000 ms");
    // Only plays every 18 seconds
    stop(car02);
    //wait delay and play again
    var int = setInterval(() => {
        play(car02);
    }, 12000);
    setTimeout(() => {
        clearInterval(int);
    }, 12000);
}

function onTrainAnimEnded(){
    console.log("Train will play in 20000 ms");
    // Only plays every 18 seconds
    stop(train);
    //wait delay and play again
    var int = setInterval(() => {
        play(train);
    }, 20000);
    setTimeout(() => {
        clearInterval(int);
    }, 20000);
}

function onPhase2OutlineEnded(){
    var randomDelay = Math.floor(Math.random() * 10000);
    stop(phase2Outline);
    //wait random and play again
    var int = setInterval(() => {
        play(phase2Outline);
    }, randomDelay);
    setTimeout(() => {
        clearInterval(int);
    }, randomDelay);

}

function initPhase2Anim(){
    fadeInIcon(btnImgPhase2,10000);
    exploreTextAnim(exploreTextArray, 11000, "zoomOut");
    fadeInAnim(phase2Outline,12000);
}

function fadeInCores(){
    fadeInCity(compass,1000);
    fadeInCity(casaGrande,1500);
    fadeInCity(phoenix,3000);
    fadeInCity(tucson,4000);
    fadeInCity(roads,8000);
    fadeInCity(transmissionLines,9000);
    fadeInAnim(transmissionLinesAnim,9000);
    fadeInAnim(truck,10000);
    fadeInAnim(car01,13000);
    fadeInAnim(car02,18000);
    fadeInAnim(train,19000);
}

function fadeInRoadSigns(){
    bounceInRoadSign(roadsign387,8200);
    bounceInRoadSign(roadsign84,8500);
    bounceInRoadSign(roadsign10,8700);
    bounceInRoadSign(roadsign8,8900);
}

function fadeInIcons(){
    fadeInIcon(airport,7500);
    fadeInIcon(btnFactory,9000);
}


function fadeInCity(element, delay){

    var int = setInterval(() => {
        element.className += " show-phase1-city animate__fadeIn";
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);

}

function bounceInRoadSign(element, delay){
    var int = setInterval(() => {
        element.className += " show-phase1-roadsign animate__fadeIn";
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}

function fadeInIcon(element, delay){
    var int = setInterval(() => {
        element.className += " show-phase1-icon animate__fadeIn";
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);

}

function fadeInAnim(element, delay){
    console.log("playing " + element.id + " in " + delay)
    var int = setInterval(() => {
        element.className += " show-phase1-video animate__fadeIn";
        element.play();
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}

function fadeInExploreText(element, delay){
    var int = setInterval(() => {
        element.classList.add("animate__zoomIn");
        element.classList.remove("animate__zoomOut");
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}

function fadeOutExploreText(element, delay){
    var int = setInterval(() => {
        element.classList.add("animate__zoomOut");
        element.classList.remove("animate__zoomIn");
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}


function exploreTextAnim(elementArray,delay,anim){
    console.log("text anim " + anim);
    for (var i = 0; i < elementArray.length; i++) {
        if(anim == "zoomOut")
            fadeInExploreText(elementArray[i],delay*((i/20)+1));
        else
            fadeOutExploreText(elementArray[i],delay*((i/20)+1));
    }
}


