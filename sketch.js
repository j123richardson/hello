


// modes
// "mouse", "sound", "motion"

let color_picker = document.getElementById("color-picker");
let color_picker_wrapper = document.getElementById("color-picker-wrapper");

color_picker.onchange = function () {
  color_picker_wrapper.style.backgroundColor = color_picker.value;
};
document.getElementById("color-picker").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});

let color_picker2 = document.getElementById("color-picker2");
let color_picker_wrapper2 = document.getElementById("color-picker-wrapper2");
let colourtext = document.getElementById("variable-text");
let cursor1colour = document.getElementById("cursor1");
let backgroundcolour = document.getElementById("backgroundcolour");
let typesomething = document.getElementById("Typesomething");


color_picker2.oninput = function () {
  colourtext.style.color = color_picker2.value;
  color_picker_wrapper2.style.backgroundColor = color_picker2.value;
  color_picker_wrapper.style.borderColor = color_picker2.value;
  cursor1colour.style.backgroundColor = color_picker2.value;
  typesomething.style.color = color_picker2.value;

};


let pressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
 

  variableText = select("#variable-text");
  randombackground = select("#RandomBackground");
  randomfill = select("#RandomFill");

  circleCursor = select("#cursor1");
}


function draw() {
  // this clears everything and leaves you with a transparent background
  
  // console.log(mode)
  circleCursor.style("left", mouseX + "px");
  circleCursor.style("top", mouseY + "px");
  circleCursor.style.color = color_picker2.value;

  //Mouse interaction
  // modes are selected with the buttons
    let textwidth = map(mouseX, 0, width, 62, 125);
    variableText.style("font-variation-settings", "'wdth' " + textwidth);

    let textweight = map(mouseY, height, 0, 100, 900);
    variableText.style("font-weight", textweight);
    
    
  }
