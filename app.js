// Generator function
function getColor() {
  return ("#" + Math.random().toString(16).slice(2, 8));
}

document.write(getColor());

// Setting the Background Color
function setBackground() {
  var bgColor = getColor();
  document.body.style.background = bgColor;
}

setBackground();
