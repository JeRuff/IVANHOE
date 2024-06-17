function car01SVGInitFollowPath()
{
    var svgObject = document.getElementById('car01Path').contentDocument;
    var pathString = svgObject.getElementById('car01-path').getElementsByTagName('path')[0].getAttribute("d")
    var car01 = document.getElementById('car01');

    var responsivePath = new Meanderer({
        path: pathString,
        width: designSourceWidth,
        height: designSourceHeight
    });

    console.warn(initWidth, initHeight);

    car01.setAttribute("style", "offset-path: path('" + responsivePath.generatePath(initWidth, initHeight) + "')");
}

function car02SVGInitFollowPath()
{
    var svgObject = document.getElementById('car02Path').contentDocument;
    var pathString = svgObject.getElementById('car02-path').getElementsByTagName('path')[0].getAttribute("d")
    var car02 = document.getElementById('car02');

    var responsivePath = new Meanderer({
        path: pathString,
        width: designSourceWidth,
        height: designSourceHeight
    });

    car02.setAttribute("style", "offset-path: path('" + responsivePath.generatePath(initWidth, initHeight) + "')");}

function truckSVGInitFollowPath()
{
    var svgObject = document.getElementById('truckPath').contentDocument;
    var pathString = svgObject.getElementById('truck-path').getElementsByTagName('path')[0].getAttribute("d")
    var truckSVG = document.getElementById('truckSVG');

    var responsivePath = new Meanderer({
        path: pathString,
        width: designSourceWidth,
        height: designSourceHeight
    });

    truckSVG.setAttribute("style", "offset-path: path('" + responsivePath.generatePath(initWidth, initHeight) + "')");
}


function transmissionLineSVGStyle()
{
    var svgObject = document.getElementById('transmissionLinesSVG').contentDocument;
    var styleTag = svgObject.getElementsByTagName('style');

    styleTag[0].append(
        ".transmissionLineSVG {",
            "stroke-linecap: round;",
            "stroke-linejoin: round;",
        "}",
    );
}

function outlineSVGStyle()
{
    var svgObject = document.getElementById('outlineSVG').contentDocument;
    var styleTag = svgObject.getElementsByTagName('style');
    var outline = svgObject.getElementById('outline');
    var glow = svgObject.getElementById('glow');

    var outlineLength = outline.getElementsByTagName("polyline")[0].getTotalLength();

    styleTag[0].append(

        ".outlineSVG {",
            "stroke-dasharray: " + outlineLength + ";",
            "stroke-dashoffset: " + outlineLength + ";",
            "stroke-linecap: round;",
            "stroke-linejoin: round;",
            "stroke-width: 3%;",
            "animation: dash 5s ease forwards;",
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
            "animation: dash 5s ease forwards;",
            "filter: blur(3.5px);",
        "}",
    );

    startOutline(outline, glow, "outlineSVG", "glowSVG");
    outline.addEventListener("animationend", function(event)
    {
        onSantaCruzOutlineEnded(event, outline, glow, "outlineSVG", "glowSVG");
    });
}