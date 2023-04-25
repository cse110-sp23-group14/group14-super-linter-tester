var audioContext;
var bufferSource;

function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  getAnswer(); // Call getAnswer() function to handle form submission

  // Redirect to result.html page with a delay of 2 seconds
  setTimeout(function() {
    localStorage.setItem("answer", sessionStorage.getItem("answer"));
    window.location.href = "result.html";
  }, 2000);
}

function getAnswer() {
  // Get question input value
  const questionInput = document.getElementById("question-input");
  const question = questionInput.value.trim();

  // Get answer options input values
  const answerAInput = document.getElementById("answer-a-input");
  const answerBInput = document.getElementById("answer-b-input");
  const answerCInput = document.getElementById("answer-c-input");
  const answerDInput = document.getElementById("answer-d-input");
  const answerA = answerAInput.value.trim();
  const answerB = answerBInput.value.trim();
  const answerC = answerCInput.value.trim();
  const answerD = answerDInput.value.trim();

  // Generate a random answer if only question is provided
  if (question && !answerA && !answerB && !answerC && !answerD) {
    randomAnswer = getRandomAnswer();
    // Store the answer in session storage
    sessionStorage.setItem("answer", randomAnswer);
  }
  // Choose an answer from provided options if available
  else if (question && (answerA || answerB || answerC || answerD)) {
    const options = [answerA, answerB, answerC, answerD].filter(option => option !== "");
    if (options.length > 0) {
      const randomOption = options[Math.floor(Math.random() * options.length)];
      // Store the answer in session storage
      sessionStorage.setItem("answer", randomOption);
    } else {
      // If no valid options are provided, store error message in session storage
      sessionStorage.setItem("answer", "Error: No valid options provided");
    }
  } else {
    // If no question is provided, store error message in session storage
    sessionStorage.setItem("answer", "Error: Please enter a question");
  }
}

function getRandomAnswer() {
  // Add more random answers here
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ];
  return answers[Math.floor(Math.random() * answers.length)];
}

function displayAnswer() {
  const answer = sessionStorage.getItem("answer");
  const resultAnswerElement = document.getElementById("answer");
  resultAnswerElement.textContent = answer;
}

// Add an event listener for the window load event
window.addEventListener("load", function() {
  displayAnswer();
});

// Add an event listener for the play event on the document
document.addEventListener("DOMContentLoaded", function() {
  if (audioContext === undefined) {
    // Create an AudioContext on the first play event
    audioContext = new AudioContext();
    bufferSource = audioContext.createBufferSource();
    bufferSource.connect(audioContext.destination);
    bufferSource.start();
  }
});


