let numberInput = document.getElementById("numberInput");
let calculateButton = document.getElementById("calculateButton");
let resultElement = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  let numbersString = numberInput.value;
  let numbersArray = numbersString.split(":");
  let numbersSum = 0;
  let numbersCount = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    let number = parseFloat(numbersArray[i]);

    if (!isNaN(number)) {
      numbersSum += number;
      numbersCount++;
    }
  }

  if (numbersCount > 0) {
    let average = numbersSum / numbersCount;
    resultElement.textContent = "Average: " + average.toFixed(2);
  } else {
    resultElement.textContent = "No valid numbers found.";
  }
});
