// Generated text responses that users will see when asking the 8-ball. Randomly selected.
const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "Outlook not so good.",
  "My sources say no.",
  "Very doubtful."
];

// 8-Ball image
const eightBall = document.querySelector(".eight-ball");

// The text output of the 8-ball
const answerDiv = document.querySelector(".answer");

// Shake Button
const shakeButton = document.querySelector(".shake-button");

// Returns a random response as a string from a list of pre-generated answers.
function getAnswer() {
  const answer = answers[Math.floor(Math.random() * answers.length)];
  return answer;
}

// Grabs a random response for the text output.
function shake() {
  answerDiv.textContent = getAnswer();
}

shakeButton.addEventListener("click", shake);

