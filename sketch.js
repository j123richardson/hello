


// modes
// "mouse", "sound", "motion"

let color_picker = document.getElementById("color-picker");
let color_picker_wrapper = document.getElementById("color-picker-wrapper");




let pressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
 

  variableText = select("#variable-text");
  randombackground = select("#RandomBackground");
  randomfill = select("#RandomFill");
  //circleCursor = select("#cursor1");

}


function draw() {
  // this clears everything and leaves you with a transparent background
  
  // console.log(mode)
  //circleCursor.style("left", mouseX + "px");
  //circleCursor.style("top", mouseY + "px");

  //Mouse interaction
  // modes are selected with the buttons
    let textwidth = map(mouseX, 0, width, 62, 125);
    variableText.style("font-variation-settings", "'wdth' " + textwidth);

    let textweight = map(mouseY, height, 0, 100, 900);
    variableText.style("font-weight", textweight);
    
    
  }
