/* 
Project 1: Relationship between window resizing and coloring of card-header bootstrap tags
*/
// 1. use addEventListener class based on window resizing
const root = document.documentElement;
const textcolorOutput = document.querySelectorAll('#rescolor');
const resOutput = document.querySelector('#resout');

// Functions for resolution <> coloring card-header 
function SetColRes(px) {
    var minpx = 400;
    var maxpx = 2000;

    return (1/(maxpx-minpx))*px + 1 - maxpx/(maxpx-minpx);
}

function reportWindowSize() {
    var horres = window.innerWidth*window.devicePixelRatio
    console.log('Horizontal resolution: ' + horres);

    // 2. Calculate corresponding opacity between 0 and 1 from it using a linear defined relationship
    var opacolor = SetColRes(horres);
    console.log('Opacity: ' + opacolor);

    // 3. Set rescol parameter used in css to new value
    root.style.setProperty('--rescol', "rgba(240, 167, 49,"+ opacolor+")")
    root.style.setProperty('--textcol', "rgba(255,0,0,"+ opacolor+")")
    resOutput.textContent = horres;
}

window.addEventListener('resize',reportWindowSize);
/*
End of project 1
*/

/*
Project 2: Functions for juggling animation
*/

function balls(){
    document.getElementById("juggling").style.visibility="visible";
}

function noballs(){
    document.getElementById("juggling").style.visibility="hidden";
}

function ShowAnimationCode(){
    window.open("Juggling.html");
}
/*
End of project 2
*/
