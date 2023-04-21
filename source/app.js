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

const eightBall = document.querySelector(".eight-ball");
const answerDiv = document.querySelector(".answer");
const shakeButton = document.querySelector(".shake-button");

function shake() {
  const answer = answers[Math.floor(Math.random() * answers.length)];
  answerDiv.textContent = answer;
}

shakeButton.addEventListener("click", shake);

