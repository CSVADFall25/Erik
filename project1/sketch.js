// UI Elements
let checkboxDiagonal;
let checkboxHorizontal;
let checkboxVertical;
let checkboxFullscreen;
let buttonClear;
let slider;
let cnv;
let drawStatus = true;

let colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let selectedColor = colors[0];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseOver(enableDraw);
  cnv.mouseOut(disableDraw);

  checkboxDiagonal = createCheckbox(' [d]iagonal', true);
  checkboxDiagonal.position(20, windowHeight - 60);

  checkboxHorizontal = createCheckbox(' [h]orizontal', true);
  checkboxHorizontal.position(20, windowHeight - 35);

  checkboxVertical = createCheckbox(' [v]ertical', true);
  checkboxVertical.position(190, windowHeight - 60);

  checkboxFullscreen = createCheckbox(' [f]ullscreen', false);
  checkboxFullscreen.position(190, windowHeight - 35);
  checkboxFullscreen.changed(toggleFullscreen);

  buttonClear = createButton('[c]lear');
  buttonClear.position(windowWidth - 95, windowHeight - 45);
  buttonClear.style('font-size', '18px');
  buttonClear.mousePressed(clearscreen);
  
  slider = createSlider(5, 100, 10, 5);
  slider.style("width", "300px");
  slider.style("transform", "rotate(-90deg)");
  slider.position(-120, windowHeight - 300);

  background('gray');
  textSize(18);
  // frameRate(30);
}

function draw() {
  // background(175);
  fill(selectedColor);
  text('colo[r]: ', windowWidth - 350, windowHeight - 30);
  
  noStroke();

  fill('black');
  square(windowWidth - 270, windowHeight - 55, 18);
  if (selectedColor == 'black') {
    fill('gray');
    square(windowWidth - 265, windowHeight - 50, 8);
  }

  fill('red');
  square(windowWidth - 270, windowHeight - 25, 18);
  if (selectedColor == 'red') {
    fill('gray');
    square(windowWidth - 265, windowHeight - 20, 8);
  }

  fill('orange');
  square(windowWidth - 235, windowHeight - 55, 18);
  if (selectedColor == 'orange') {
    fill('gray');
    square(windowWidth - 230, windowHeight - 50, 8);
  }

  fill('yellow');
  square(windowWidth - 235, windowHeight - 25, 18);
  if (selectedColor == 'yellow') {
    fill('gray');
    square(windowWidth - 230, windowHeight - 20, 8);
  }

  fill('green');
  square(windowWidth - 200, windowHeight - 55, 18);
  if (selectedColor == 'green') {
    fill('gray');
    square(windowWidth - 195, windowHeight - 50, 8);
  }

  fill('blue');
  square(windowWidth - 200, windowHeight - 25, 18);
  if (selectedColor == 'blue') {
    fill('gray');
    square(windowWidth - 195, windowHeight - 20, 8);
  }

  fill('indigo');
  square(windowWidth - 165, windowHeight - 55, 18);
  if (selectedColor == 'indigo') {
    fill('gray');
    square(windowWidth - 160, windowHeight - 50, 8);
  }

  fill('violet');
  square(windowWidth - 165, windowHeight - 25, 18);
  if (selectedColor == 'violet') {
    fill('gray');
    square(windowWidth - 160, windowHeight - 20, 8);
  }

  fill(selectedColor);
  if (mouseIsPressed && drawStatus) {
    circle(mouseX, mouseY, slider.value());
    if (checkboxDiagonal.checked()) { circle(windowWidth - mouseX, windowHeight - mouseY, slider.value()); }
    if (checkboxHorizontal.checked()) { circle(windowWidth - mouseX, mouseY, slider.value()); }
    if (checkboxVertical.checked()) { circle(mouseX, windowHeight - mouseY, slider.value()); }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  checkboxDiagonal.position(20, windowHeight - 60);
  checkboxHorizontal.position(20, windowHeight - 35);
  checkboxVertical.position(190, windowHeight - 60);
  checkboxFullscreen.position(190, windowHeight - 35);
  buttonClear.position(windowWidth - 95, windowHeight - 45);
  slider.position(-120, windowHeight - 300);
  clearscreen();
}

function mouseWheel(event) {
  if (event.delta < 0) {
    slider.value(slider.value() + 5);
  } else {
    slider.value(slider.value() - 5);
  }
}

function enableDraw() {
  drawStatus = true;
}

function disableDraw() {
  drawStatus = false;  
}

function keyPressed() {
  if (key === 'd') {
    checkboxDiagonal.checked(!checkboxDiagonal.checked());
  } else if (key === 'h') {
    checkboxHorizontal.checked(!checkboxHorizontal.checked());
  } else if (key === 'v') {
    checkboxVertical.checked(!checkboxVertical.checked());
  } else if (key === 'f') {
    checkboxFullscreen.checked(!checkboxFullscreen.checked());
    toggleFullscreen();
  } else if (key === 'r') {
    let index = colors.indexOf(selectedColor);
    if (index < 7) {
      selectedColor = colors[index + 1];
    } else {
      selectedColor = colors[0];
    }
  } else if (key === 'c') {
    clearscreen();
  }
}

function clearscreen() {
  background('gray');
}

function toggleFullscreen() {
  fullscreen(checkboxFullscreen.checked());
}