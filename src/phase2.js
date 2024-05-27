const transitionFrame = document.getElementById("transitionFrame");

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.querySelector('body').classList.add("loaded")

    transitionFrame.classList.add("animate__fadeOut");
});
