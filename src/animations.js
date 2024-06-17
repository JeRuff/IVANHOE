function startSequence(){

    startCSSAnim(plane,"planeAnim",500);

    fadeInCity(compass,1000);
    fadeInCity(casaGrande,1500);
    fadeInCity(phoenix,3000);
    fadeInCity(tucson,4000);

    fadeInIcon(airport,8500);

    fadeInCity(roads,9000);

    bounceInRoadSign(roadsign387,9100);
    bounceInRoadSign(roadsign84,9300);
    bounceInRoadSign(roadsign10,9500);
    bounceInRoadSign(roadsign8,9700);

    fadeInCity(transmissionLinesMap,10000);
    fadeInIcon(btnFactory,10500);

    /* Transmission Lines goes right away when map is loaded, and then every 25 seconds */
    fadeInTLAnim(transmissionLinesSVG,11000);
    /* Semi-truck goes 1 second after the transmission lines starts and then every 18 seconds after it is out of screen */
    startCSSAnim(truck,"truckFollowPath",10500);
    /* Top left car goes 3 seconds after the semi truck starts and then every 18 seconds after it is out of screen */
    startCSSAnim(car01,"car01PathAnim",13500);
    /* Bottom left car goes 5 seconds after the top left car starts and then every 12 seconds after it is out of screen*/
    startCSSAnim(car02,"car02PathAnim",18500);
    /* Train starts 1 second after the bottom left car starts and then every 20 seconds after it is out of screen */
    startCSSAnim(train,"trainSVGAnim",19500);

    //Start Phase 2 Button anim loop
    initPhase2Anim(11000);
}


function phase2Click(){
    console.log("start phase 2");

    btnPhase2Holder.classList.add("slide-fwd-center");
    exploreTextHolder.classList.add("fadeOut");
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

function onAnimationEnded(event, element, CSSclass, delay){
    console.log(element.id + " animation " + ": " + CSSclass + " will play in " + delay);
    element.classList.remove(CSSclass);

    //wait 18 seconds and play again
    var int = setInterval(() => {
        element.classList.add(CSSclass);
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}

function onPlaneAnimationEnded(event)
{
    if(event.type == "animationend")
    {
        plane.classList.remove("planeAnim");
        var randomDelay = Math.floor(Math.random() * (25000 - 15000) + 15000);
        console.log("plane will play in " + randomDelay + " ms");

        //wait random and play again
        var int = setInterval(() => {
            plane.classList.add("planeAnim");
        }, randomDelay);
        setTimeout(() => {
            clearInterval(int);
        }, randomDelay);
    }
}


function onTransmissionLinesEnded(event){
    if(event.type == "animationend" && event.animationName == "clipPathAnim")
        {
            fadeOutTLAnim(transmissionLinesSVG,0);
            var int = setInterval(() => {
                fadeInTLAnim(transmissionLinesSVG,0);
            }, 25000);
            setTimeout(() => {
                clearInterval(int);
            }, 25000);
        }
}

function onSantaCruzOutlineEnded(event, outline, glow, outlineCSSClass, glowCSSClass){
    var randomDelay = Math.floor(Math.random() * 10000);

    outlineSVG.style.display = "none";
    outline.classList.remove(outlineCSSClass);
    glow.classList.remove(glowCSSClass);

    if(event.type == "animationend" && event.animationName == "dash")
        {
            
            var int = setInterval(() => {
                outlineSVG.style.display = "block";
                outline.classList.add(outlineCSSClass);
                glow.classList.add(glowCSSClass);
            }, randomDelay);
           
            setTimeout(() => {
                clearInterval(int);
            }, randomDelay);
        }
}

function initPhase2Anim(delay){

    fadeInIcon(btnImgPhase2,delay);
    exploreTextAnim(exploreTextArray, delay+1000, "zoomOut");
    
    var int = setInterval(() => {
        outlineSVG.style.display = "block";
    }, delay+1000);
    setTimeout(() => {
        clearInterval(int);
    }, delay+1000);
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

function startCSSAnim(element,animClass, delay){
    console.log("playing " + element.id + " in " + delay)
    var int = setInterval(() => {
        element.classList.add(animClass);
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}

function fadeInTLAnim(element, delay){
    var op = 0.001;  // initial opacity

    var int = setInterval(() => {
        element.style.display = 'block';
        element.classList.add("TLClipPath");
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);
}

function fadeOutTLAnim(element)
{
    element.style.display = 'none';
    element.classList.remove("TLClipPath");

    var int = setInterval(() => {
        element.style.display = 'block';
        element.classList.add("TLClipPath");
    }, 25000);
    setTimeout(() => {
        clearInterval(int);
    }, 25000);
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
    for (var i = 0; i < elementArray.length; i++) {
        if(anim == "zoomOut")
            fadeInExploreText(elementArray[i],delay*((i/20)+1));
        else
            fadeOutExploreText(elementArray[i],delay*((i/20)+1));
    }
}

function startOutline(outline, glow, outlineCSSClass, glowCSSClass){

    outlineSVG.style.display = "block";
    outline.classList.add(outlineCSSClass);
    glow.classList.add(glowCSSClass);
}


