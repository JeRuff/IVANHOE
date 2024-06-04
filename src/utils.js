////////////////////////// VIDEO SOURCE UTILS //////////////////////////

function swapVideoSource()
{
    var result = bowser.getParser(window.navigator.userAgent);
    console.log("You are using " + result.parsedResult.browser.name + " v" + result.parsedResult.browser.version + " on " + result.parsedResult.os.name);

    if(result.parsedResult.browser.name == "Safari" || result.parsedResult.os.name == "iOS")
        {useMOV();}        
    else 
        {useWEBM();}
}

function useWEBM(){
    for (var i = 0; i < videoElementsArray.length; i++) {
        videoElementsArray[i].src = videoElementsArray[i].getElementsByTagName("source")[0].src;
        console.log(videoElementsArray[i].id + " source is : " + videoElementsArray[i].src);
    }
}

function useMOV(){
    for (var i = 0; i < videoElementsArray.length; i++) {
        console.log(videoElementsArray[i].getElementsByTagName("source")[1].src);
        console.log(videoElementsArray[i].id + " source is : " + videoElementsArray[i].src);
        videoElementsArray[i].src = videoElementsArray[i].getElementsByTagName("source")[1].src;
    }
}

function useHEVC(){
    for (var i = 0; i < videoElementsArray.length; i++) {
        console.log(videoElementsArray[i].getElementsByTagName("source")[2].src);
        console.log(videoElementsArray[i].id + " source is : " + videoElementsArray[i].src);
        videoElementsArray[i].src = videoElementsArray[i].getElementsByTagName("source")[2].src;
    }
}

////////////////////////// UTILS ///////////////////////////////////////

function stop(videoElement){
    videoElement.pause();
    videoElement.currentTime = 0;
    videoElement.classList.remove("show-phase1-video");
    videoElement.classList.remove("animate__fadeIn");
}

function play(videoElement){
    videoElement.classList.add("show-phase1-video");
    videoElement.classList.add("animate__fadeIn");
    videoElement.play();
}

function randomAnimationSelect(array){
    const index = Math.floor(Math.random() * array.length);
    const animation = array[index];

    return animation;
}

//////////////// FIT Text ////////////////////////

window.fitText( exploreText,0.5 );
window.fitText( santaText,0.5 );
window.fitText( cruzText,0.5 );