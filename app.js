let colors = ["red", "gray", "blue", "yellow"];
i = 0;
function changeColor() {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i === colors.length) {
    i = 0;
  }
}
function changeInpColor() {
  var newColor = document.getElementById("inp").value;
  document.body.style.backgroundColor = newColor;
  colors.push(newColor);

  console.log(colors);
}

function goBack() {
  window.history.back();
  console.log("ajillalaa");
}
