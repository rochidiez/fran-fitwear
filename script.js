// Define the list of options as an array of objects with text properties
var opciones = [
  {
    text: ["AMRAP 12'", "5 Push-ups", "10 Squats"],
  },
  {
    text: ["Option 2", "Line 2", "Line 3"],
  },
  {
    text: ["Option 3", "Line 2"],
  },
  // Add more workout options with multiple lines as needed
];

// Get references to the button and the area where the random option will be displayed
var generarBtn = document.getElementById("generar-btn");
var opcionAleatoria = document.getElementById("opcion-aleatoria");

// Variable to keep track of the last shown option
var lastShownOption = null;

// Function to set a workout with the specified text
function setWorkout(option) {
  var workoutHTML = "<p>";
  workoutHTML += "<strong style=\"font-size: 28px;\">" + option.text[0] + "</strong><br>";
  workoutHTML += option.text.slice(1).join("<br>");
  workoutHTML += "</p>";
  opcionAleatoria.innerHTML = workoutHTML;
}

// Function to set a random workout
function setRandomWorkout() {
  var randomIndex = Math.floor(Math.random() * opciones.length);
  var randomOption = opciones[randomIndex];

  // Check if the new random option is the same as the last shown option
  // If it is, generate a new random option until it's different from the last one
  while (JSON.stringify(randomOption) === JSON.stringify(lastShownOption)) {
    randomIndex = Math.floor(Math.random() * opciones.length);
    randomOption = opciones[randomIndex];
  }

  lastShownOption = randomOption;
  setWorkout(randomOption);
}

// Add an event listener to the button to generate a random option when clicked
generarBtn.addEventListener("click", setRandomWorkout);

// Set a random initial workout when the page loads
setRandomWorkout();
