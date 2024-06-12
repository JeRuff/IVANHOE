
const viewport = document.getElementById('container');
const content = document.getElementById('parent');

var initWidth = 0, initHeight = 0;

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
const transmissionLinesMap = document.getElementById("transmissionLinesMap");
const compass = document.getElementById("compass");

const roadsign8 = document.getElementById("road8");
const roadsign10 = document.getElementById("road10");
const roadsign84 = document.getElementById("road84");
const roadsign387 = document.getElementById("road387");

const airport = document.getElementById("airport");
const btnFactory = document.getElementById("btn-factory");
const btnPhase2 = document.getElementById("btnPhase2");
const btnPhase2Holder = document.getElementById("btnPhase2Holder");

const plane = document.getElementById("planeSVG");
const truck = document.getElementById("truckSVG");
const train = document.getElementById("trainSVG");
const car01 = document.getElementById("car01");
const car02 = document.getElementById("car02");

const transmissionLinesSVG = document.getElementById("transmissionLinesSVG");
const santaCruzOutlineSVG = document.getElementById("outlineSVG");

const truckPath = document.getElementById("truckPath");
const car01Path = document.getElementById("car01Path");
const car02Path = document.getElementById("car02Path");

const phase2TextIn = document.getElementById("phase2TextIn");
const phase2TextOut = document.getElementById("phase2TextOut");

const exploreText = document.getElementById("exploreText");
const santaText = document.getElementById("santaText");
const cruzText = document.getElementById("cruzText");
const exploreTextArray = document.getElementById("santaCruzTextHolder").getElementsByTagName("div");
const exploreTextHolder = document.getElementById("santaCruzTextHolder");


//POP UP//
const hoverBackground = document.getElementById("openPopup");
const popUpText = document.getElementById("popUpText");
const popUpTitle = document.getElementById("popUpTitle");
const popUpVideo = document.getElementById("popUpVideo");
const popUpSubtitle = document.getElementById("popUpSubtitle");
const popUp = document.getElementById("popUp");
const popUpContent = document.getElementById("popUpContent");

// Page is Loaded, Start Presentation
window.addEventListener('load', (event) => {

    console.log('page is fully loaded');
    document.querySelector('body').classList.add("loaded");

    initWidth = document.getElementById("phase1itemsContainer").clientWidth;
    initHeight = document.getElementById("phase1itemsContainer").clientHeight;

    //Start layout sequence
    startSequence();
    //Start Phase 2 Button anim loop
    initPhase2Anim();

    });

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
 */ popUpVideo.play();
    hoverBackground.style.display = "block";

    hoverBackground.classList.add("animate__zoomIn");
    hoverBackground.classList.remove("animate__zoomOut");
    hoverBackground.classList.remove('click-through');

    setInterval(function () {
        //Pop up video alignement
        var vidRatio = popUpVideo.clientHeight / popUpVideo.clientWidth;
        var width = popUpVideo.clientWidth;
        popUpContent.style.width = width + "px";
        popUpContent.style.height = width * vidRatio;
    }, 1);

}


