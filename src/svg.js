window.addEventListener('load', (event) => {
    outlineSVGStyle();
    transmissionLineSVGStyle();
});


function transmissionLineSVGStyle()
{
    var svgObject = document.getElementById('transmissionLinesSVG').contentDocument;
    var styleTag = svgObject.getElementsByTagName('style');

    var transmissionLines = [svgObject.getElementById('TL-01'),svgObject.getElementById('TL-02'),svgObject.getElementById('TL-03'),svgObject.getElementById('TL-04')];
    var outlineLength = transmissionLines[0].getTotalLength();

    styleTag[0].append(
        ".transmissionLineSVG {",
        "stroke-dasharray: " + outlineLength + ";",
        "stroke-dashoffset: " + outlineLength + ";",
        "stroke-linecap: round;",
        "stroke-linejoin: round;",
        "stroke-width: 1%;",
        "animation: dash 1s ease-in-out infinite;",
        "filter: blur(3.5px);",
    "}",
    "@keyframes dash {",
    "0% {",
        "stroke-dashoffset: " + -outlineLength + ";",
    "}",

    "100% {",
        "stroke-dashoffset: " + outlineLength + ";",
    "}",
  "}",
    );

    for (var i = 0; i < transmissionLines.length; i++) {
        transmissionLines[i].classList.add("transmissionLineSVG");
    }
}

function outlineSVGStyle()
{
    var svgObject = document.getElementById('outlineSVG').contentDocument;
    var styleTag = svgObject.getElementsByTagName('style');
    var outline = svgObject.getElementById('outline');
    var glow = svgObject.getElementById('glow');

    var outlineLength = outline.getElementsByTagName("polyline")[0].getTotalLength();
    //console.warn(outline.getElementsByTagName("polyline")[0].getTotalLength());


    styleTag[0].append(

        ".outlineSVG {",
            "stroke-dasharray: " + outlineLength + ";",
            "stroke-dashoffset: " + outlineLength + ";",
            "stroke-linecap: round;",
            "stroke-linejoin: round;",
            "stroke-width: 3%;",
            "animation: dash 5s ease infinite;",
        "}",

        "@keyframes dash {",
            "0% {",
                "stroke-dashoffset: " + outlineLength + ";",
            "}",

            "100% {",
                "stroke-dashoffset: " + -outlineLength + ";",
            "}",
          "}",

        ".glowSVG {",
            "stroke-dasharray: " + outlineLength + ";",
            "stroke-dashoffset: " + outlineLength + ";",
            "stroke-linecap: round;",
            "stroke-linejoin: round;",
            "stroke-width: 3%;",
            "animation: dash 5s ease infinite;",
            "filter: blur(3.5px);",
        "}",
    );

    outline.classList.add("outlineSVG");
    glow.classList.add("glowSVG");
}