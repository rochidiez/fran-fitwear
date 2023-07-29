// Define the list of options as an array of objects with text properties
var opciones = [
  {
    text: ["3 Rounds x tiempo'", "400 mts run", "12 Burpees","21 Squats"],
  },
  {
    text: ["Amrap 20", "10 Push Ups", "20 Air Squats","10 Burpees","20 Lunges"],
  },
  {
    text: ["Amrap 15", "200 mts run", "Max DU UBK"],
  },
  {
    text: ["For time 21-15-9-15-9","Squat Broad Jump", "Sit ups", "Push Ups"],
  },
  {
    text: ["For time", "Buy-In: 1", ",000 meter Run", "Directly into AMRAP in 22 minutes of:", "23 Air Squats", "7 Burpees", "14 Push-Ups", "Cash-Out: 1,000 meter Run"],
  },
  {
    text: ["4 Tabatas", "1) Shuttle Runs", "2) Squats", "3) Burpees", "4) DU / SU"],
  },
  {
    text: [ "For time", "1km run", "100 Squats", "100 Sit ups", "100 Burpes"],
  },
  {
    text: [ "6 Rounds for time", "24 Air Squats", "24 Push ups",  "24 Walking lunges", "400 Mts Run"],
  },
  {
    text: [ "7 Rounds for time", "500 mts Run", "10 HSPU"],
  },
  {
    text: [ "For time",  "1k Run",  "25 Squats", "750 mts Run",  "50 Squats",  "500 mts run",  "75 Squats",  "250 mts run",  "100 Squats"],
  },
  {
    text: [ "For Time",  "50 Burpees", "400 meter Run",  "100 Push-Ups",  "400 meter Run",  "150 Walking Lunges",  "400 meter Run",  "200 Air Squats",  "400 meter Run",  "150 Walking Lunges",  "400 meter Run",  "100 Push-Ups",  "400 meter Run", "50 Burpees"],
  },
   {
    text: [ "AMRAP in 9 minutes", "10 Thrusters (2x1.5 L water bottles)","10 Ground-to-Overheads (2x1.5 L water bottles)","Directly into:","100 Lunges", "100 Jumping", " Squats", "150 Sit-Ups", "50 Air Squats","50 Lunges"],
  },
   {
    text: [ "Amrap 15", "4 Burpees", "6 Hand Release Push-Ups", "8 Alternating Pistols"],
  },
   {
    text: [ "7 Rounds for Time", "200 meter Sprint", "50 meter Bear Crawl", "15 Burpees", "Rest 2 minutes between rounds"],
  },
   {
    text: [ "AMRAP in 2", "0 minutes", "20 Air Squats", "20 Sit-Ups", "10/7 Handstand Push-Ups"],
  },
   {
    text: [ "For Time", "Buy-In: 3,500 meter Run", "Then, 21 Rounds of:","5 Burpees", "10 Push-Ups", "15 Air Squats","Cash-Out: 3,500 meter Run"],
  },
   {
    text: [ "5 Rounds for Reps", "Max Push-Ups", "Max Air Squats","10 Burpees", "Rest 1 minute"],
  },
   {
    text: [  "AMRAP in 10 minutes", "10 Mountain Climbers", "10 Push-Ups", "10 Hollow Rocks", "10 Sit-Ups" ],
  },
  {
    text: [ "10 Rounds for Time", "50 Jumping Jacks", "5 Burpees"],
  },
  {
    text: [ "6 Rounds for Time", "15 Reverse Lunges", "15 Hollow Rocks", "15 Push-Ups"],
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
  workoutHTML += "<strong>" + option.text[0] + "</strong><br>";
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
