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
    displayAnswer(randomAnswer);
  }
  // Choose an answer from provided options if available
  else if (question && (answerA || answerB || answerC || answerD)) {
    const options = [answerA, answerB, answerC, answerD].filter(option => option !== "");
    if (options.length > 0) {
      const randomOption = options[Math.floor(Math.random() * options.length)];
      displayAnswer(randomOption);
    } else {
      // If no valid options are provided, show error message
      displayAnswer("Error: No valid options provided");
    }
  } else {
    // If no question is provided, show error message
    displayAnswer("Error: Please enter a question");
  }

  // Prevent form submission
  return false;
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

function displayAnswer(answer) {
  const answerElement = document.getElementById("answer");
  answerElement.textContent = answer;
}

function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  getAnswer(); // Call getAnswer() function to handle form submission
<<<<<<< HEAD
}
=======
}
>>>>>>> 3c982235e22ffb21587b6454481df1bf33d1b1c1
