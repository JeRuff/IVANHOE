
const viewport = document.getElementById('container');
const content = document.getElementById('parent');

const sb = new ScrollBooster({
    viewport,
    content,
    textSelection: false,
    scrollMode: 'transform',
    emulateScroll: true,
    shouldScroll: (data, event) => {
        // disable scroll if clicked on button
        const isButton = event.target.nodeName.toLowerCase() === 'button';
        return !isButton;
    }
});

var currentPhase1Animation;

//ELEMENTS//
const casaGrande = document.getElementById("casaGrande");
const phoenix = document.getElementById("phoenix");
const tucson = document.getElementById("tucson");
const roads = document.getElementById("roads");
const transmissionLines = document.getElementById("transmissionLines");
const compass = document.getElementById("compass");

const roadsign8 = document.getElementById("road8");
const roadsign10 = document.getElementById("road10");
const roadsign84 = document.getElementById("road84");
const roadsign387 = document.getElementById("road387");

const airport = document.getElementById("airport");
const btnFactory = document.getElementById("btn-factory");
const btnPhase2 = document.getElementById("btnPhase2");

const plane = document.getElementById("planeAnim");
const truck = document.getElementById("truckAnim");
const transmissionLinesAnim = document.getElementById("transmissionLinesAnim");
const train = document.getElementById("trainAnim");
const cars = document.getElementById("carsAnim");

const phase2Outline = document.getElementById("phase2Outline");
const phase2TextIn = document.getElementById("phase2TextIn");
const phase2TextOut = document.getElementById("phase2TextOut");

const exploreText = document.getElementById("exploreText");
const santaText = document.getElementById("santaText");
const cruzText = document.getElementById("cruzText");
const exploreTextHolder = document.getElementById("santaCruzTextHolder").getElementsByTagName("div");

//list of all animations
const videoElementsArray = [plane, truck, transmissionLinesAnim,train,cars,phase2Outline];
//list of animations that have random spawn
const randomAnimationArray = [truck,transmissionLinesAnim,cars];

//POP UP//
const hoverBackground = document.getElementById("openPopup");
const popUpText = document.getElementById("popUpText");
const popUpTitle = document.getElementById("popUpTitle");
const popUpVideo = document.getElementById("popUpVideo");
const popUpSubtitle = document.getElementById("popUpSubtitle");
const popUp = document.getElementById("popUp");
const popUpContent = document.getElementById("popUpContent");

//Pop up video alignement
var vidRatio = popUpVideo.clientHeight / popUpVideo.clientWidth;


//EVENTS//
plane.addEventListener("ended", planeAnimHandler);

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

btnPhase2.addEventListener("click", phase2Click);

phase2Outline.addEventListener("ended", onPhase2OutlineEnded);
btnFactory.addEventListener("mouseup", factoryMouseUp);
btnFactory.addEventListener("click", factoryClick);

//Only adding event listener after first time play
cruzText.addEventListener("animationend", function(){
    console.log("text animation from handler");
    exploreTextAnim(exploreTextHolder,Math.floor(Math.random() * (5000 - 1000) + 5000));
});


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.querySelector('body').classList.add("loaded");

    //Check OS and Browser and load animations accordingly
    swapVideoSource();


    fadeInCores();
    fadeInRoadSigns();
    fadeInIcons();

    //Start Phase 2 Button anim loop
    initPhase2Anim();

    //Plane animations + random loop of other animations
    fadeInAnim(plane,1000);
});

function phase2Click(){
    console.log("start phase 2");
    btnPhase2Holder = document.getElementById("phase2BtnHolder");
    btnPhase2Holder.classList.add("slide-fwd-center");

    //Stop Video
    stop(phase2Outline);

    btnPhase2Holder.addEventListener("animationend", () => {
        console.log("phase2 ended");
        window.location = 'phase2.html';
      });

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

function planeAnimHandler(){

    //Plane is first anim, trigger other anims now to get the ball rolling ;)
    playNextAnim(randomAnimationSelect(randomAnimationArray));
    trainAnimHandler();


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

function trainAnimHandler(){
console.log("train will play in 15000  ms");
    // Only plays every 15 seconds
    stop(train);
    //wait delay and play again
    var int = setInterval(() => {
        play(train);
    }, 15000);
    setTimeout(() => {
        clearInterval(int);
    }, 15000);
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
    fadeInIcon(btnPhase2,10000);
    exploreTextAnim(exploreTextHolder, 11000);
    fadeInAnim(phase2Outline,12000);
}

function fadeInCores(){
    fadeInCity(compass,1000);
    fadeInCity(casaGrande,1500);
    fadeInCity(phoenix,3000);
    fadeInCity(tucson,4000);
    fadeInCity(roads,8000);
    fadeInCity(transmissionLines,9000);
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
        element.className += " show-phase1-roadsign animate__bounceIn";
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


function exploreTextAnim(elementArray,delay){

    for (var i = 0; i < elementArray.length; i++) {
        if(elementArray[i].classList.contains("animate__zoomOut"))
            fadeInExploreText(elementArray[i],delay*((i/20)+1));
        else
            fadeOutExploreText(elementArray[i],delay*((i/20)+1));
    }
}





//POP UP//

function closePopUp() {
    popUpVideo.pause();
    popUpVideo.currentTime = 0;

    hoverBackground.classList.remove("animate__zoomIn");
    hoverBackground.classList.add("animate__zoomOut");
    hoverBackground.classList.add('click-through');

}

function openPopUp(element, title, subtitle, text, source) {

    console.log("OpenPopUp : " + source);

    popUpText.innerText = text;
    popUpTitle.innerText = title;
    popUpVideo.src = source;
/*     popUpSubtitle.innerText = subtitle;
 */    popUpVideo.play();
    hoverBackground.style.display = "block";

    hoverBackground.classList.add("animate__zoomIn");
    hoverBackground.classList.remove("animate__zoomOut");
    hoverBackground.classList.remove('click-through');

}

setInterval(function () {
    var width = popUpVideo.clientWidth;
    popUpContent.style.width = width + "px";
    popUpContent.style.height = width * vidRatio;
}, 10);
