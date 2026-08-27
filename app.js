//lab 1
const predictions = [
  { id: 1, name: "Logistic Regression", result: 0.82 },
  { id: 2, name: "Random Forest", result: 0.94 },
  { id: 3, name: "Support Vector Machine", result: 0.75 },
  { id: 4, name: "Neural Network", result: 0.91 },
];

const goodModels = [];

for (let i = 0; i < predictions.length; i++) {
  if (predictions[i].result > 0.85) {
    goodModels.push(predictions[i]);
  }
}

console.log("Filtered Models (> 0.85):", goodModels);

function sumResults(dataArray) {
  let total = 0;
  for (let i = 0; i < dataArray.length; i++) {
    total += dataArray[i].result;
  }
  return total;
}

console.log("Sum of all results:", sumResults(predictions));

function findBestModel(dataArray) {
  let best = dataArray[0];

  for (let i = 1; i < dataArray.length; i++) {
    if (dataArray[i].result > best.result) {
      best = dataArray[i];
    }
  }
  return best;
}

console.log("Best Model:", findBestModel(predictions));

const sumResultsArrow = (dataArray) => {
  let total = 0;
  for (let i = 0; i < dataArray.length; i++) {
    total += dataArray[i].result;
  }
  return total;
};

console.log("Sum using Arrow Function:", sumResultsArrow(predictions));

//lab 2
const form = document.querySelector("#house-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const oldMessage = document.querySelector(".status-message");
  if (oldMessage) {
    form.removeChild(oldMessage);
  }

  const address = document.querySelector("#address").value;
  const bedrooms = document.querySelector("#bedrooms").value;

  const messageBox = document.createElement("p");
  messageBox.className = "status-message";

  if (address.trim() === "" || bedrooms === "" || Number(bedrooms) <= 0) {
    messageBox.textContent =
      "Error: Please provide a valid address and a positive number of bedrooms.";
    messageBox.style.color = "red";
  } else {
    messageBox.textContent = "Form is valid - Ready to submit!";
    messageBox.style.color = "green";
  }
  form.appendChild(messageBox);
});
