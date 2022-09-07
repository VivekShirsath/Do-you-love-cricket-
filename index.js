var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score = 0;

function welcome() {
  var userName = readlineSync.question(chalk.blue("What's your name? "));

  console.log("Welcome " + userName + " to how well you know me?");
  console.log("Let's Start");
}

var highScore = [{
  name: "Vinay",
  score: 6
},
{
  name: "Yash",
  score: 5
}                
]



var questions = [{
  question: chalk.yellow("Which cricketer has most test centuries?\n"),
  mcq: ["Ricky Pointing","Sachin Tendulkar","Virat Kohli","Rohit Sharma"],
  answer: "1"
}, {
  question: chalk.yellow("Who won the 2021 t20 wc? \n"),
  mcq: ["India", "Australia", "New Zealand", "England"],
  answer: "1"
},
{
  question: chalk.yellow("Who has most test wickets?\n "),
  mcq: ["Murlidharan", "Anderson", "Kumble", "Harbhajan"],
  answer: "0"
},
{
  question: chalk.yellow("How many players does one team Have ?\n "),
  mcq: ["7", "8", "12", "11"],
  answer: "3"
},
{
  question: chalk.yellow("Which is not a format in cricket?\n "),
  mcq: ["t20", "odi", "30", "test"],
  answer: "2"
},{
  question: chalk.yellow("Which team won IPL 2022?\n "),
  mcq: ["CSK", "RCB", "MI", "GT"],
  answer: "3"
}            ];


function quiz() {
  for (i = 0; i < questions.length; i++) {
    console.log("Question " + (i + 1))
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.mcq, currentQuestion.answer)
  }
}

function play(question, mcq, answer) {
  var userAnswer = readlineSync.keyInSelect(mcq,question);

  if (userAnswer == answer) {
    console.log(chalk.green("right!"));
    score = score + 1;
    console.log(chalk.whiteBright("Your score is:  " + score))


  } else {
    console.log(chalk.red("wrong!"));
    score = score -1;
    console.log(chalk.whiteBright("Your score is:  " + score))

  }

}
welcome();
quiz();

var totalScore = score;
console.log(chalk.yellow("Your total score is: " + totalScore));
console.log(chalk.cyanBright("Check out high scores..."));
function callScores(name, score){
  console.log(name + ":" + score); 
}


for(var i = 0; i<highScore.length; i++){
  currentScore = highScore[i];
  callScores(currentScore.name, currentScore.score);
  
}
congragulate(currentScore.score);
function congragulate(score){
  if(totalScore > currentScore.score){
  console.log(chalk.cyanBright("Congrats you beat the highscores. Congrats!"));
  }

  else{
    console.log(chalk.cyanBright("Good luck next time!"));
  }
              }
