var audioContext;
var bufferSource;

function submitForm(event) {
  //play mystical music
  playNinjaMusic();

  event.preventDefault(); // Prevent form submission
  getAnswer(); // Call getAnswer() function to handle form submission

  // Redirect to result.html page with a delay of 2 seconds
  setTimeout(function() {
    localStorage.setItem("answer", sessionStorage.getItem("answer"));
    window.location.href = "result-page.html";
  }, 5000);
}

function playNinjaMusic() {
  const audio = document.getElementById("mystical-music");
  audio.play();
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
      sessionStorage.setItem("answer", "The ninja senses your confusion. Please enter a valid option and try again.");
    }
  } else {
    // If no question is provided, store error message in session storage
    sessionStorage.setItem("answer", "Our ninja skills are sharp, but even the most skilled ninja requires a question to reveal the truth.");
  }
}

function getRandomAnswer() {
  // Add more random answers here
  const ninjaAnswers = [
    "The way of the ninja is not always clear. Ask again later.",
    "The answer is hidden in the shadows. Seek it out.",
    "The ninja spirit says yes, but beware of traps.",
    "The ninja stars align in your favor. Signs point to yes.",
    "The path you seek requires discipline and focus. Outlook good.",
    "The ninja way demands patience and perseverance. Signs point to yes.",
    "Your question carries the weight of the samurai. Outlook uncertain.",
    "To reveal the answer, you must first master the art of stealth. Try again later.",
    "The ninja code demands secrecy. Reply hazy, try again.",
    "The answer is shrouded in mystery. Concentrate and ask again."
  ];
  return ninjaAnswers[Math.floor(Math.random() * ninjaAnswers.length)];
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

function redirect() {
  window.location.href = "index.html";
}