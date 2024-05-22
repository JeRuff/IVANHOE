/* Smooth Scroll */

const viewport = document.getElementById('container');
const content = document.getElementById('parent');

const sb = new ScrollBooster({
    viewport,
    content,
    textSelection: false,
    scrollMode: 'transform',
    emulateScroll: true,
    /*     onUpdate: (data) => {
            // viewport.scrollLeft = data.position.x
            // viewport.scrollTop = data.position.y
            content.style.transform = `translate(${-data.position.x}px,${-data.position.y}px)`
        }, */
    shouldScroll: (data, event) => {
        // disable scroll if clicked on button
        const isButton = event.target.nodeName.toLowerCase() === 'button';
        return !isButton;
    }
});

/* image.addEventListener('load', () => {
    // set viewport position to the center of an image
    const offsetX = image.scrollWidth - viewport.offsetWidth;
    const offsetY = image.scrollHeight - viewport.offsetHeight;
    sb.setPosition({
        x: offsetX / 2,
        y: offsetY / 2
    });
});
 */

const casaGrande = document.getElementById("casaGrande");
const phoenix = document.getElementById("phoenix");
const tucson = document.getElementById("tucson");


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.querySelector('body').classList.add("loaded")
    fadeInCities();
});


function fadeInCities(){
    fadeInCity(casaGrande,2000);
    fadeInCity(phoenix,3000);
    fadeInCity(tucson,4000);
}


function fadeInCity(element, delay){

    var int = setInterval(() => {
        element.className += " show-phase1-city";
    }, delay);
    setTimeout(() => {
        clearInterval(int);
    }, delay);

}
