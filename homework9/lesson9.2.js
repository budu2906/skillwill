let colorInput = document.getElementById("colorInput");
let changeColorButton = document.getElementById("changeColorButton");

changeColorButton.addEventListener("click", function() {
  let color = colorInput.value.toLowerCase();

  if (color === "red" || color === "blue" || color === "green" || color === "black" || color === "white") {
    document.body.style.backgroundColor = color;
  } else {
    alert("error");
  }
});
