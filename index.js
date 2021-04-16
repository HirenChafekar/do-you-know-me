var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ' );
console.log('Hello ' + userName + '! Welcome to DO YOU KNOW Hiren?')

var score = 0;

var highscores = [{
  name : 'Rohan',
  score : 3 
},
{
  name : 'Aarti',
  score : 3
}]

function doYouKnowHiren(question,answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log('Right!');
    score++;
  }else{
    console.log('Wrong!');
    score--;
  }
  console.log('Current Score : ', score);
  console.log('--------------------------------------------');
}

var questions = [{
  question : 'Where do I live? ',
  answer : 'Surat' 
},
{
  question : 'Who is my favourite Superhero? ',
  answer : 'Spiderman'
},
{
  question : 'Which is my favourite series? ',
  answer : 'Game of Thrones'
}]

for(var i=0;i<questions.length;i++){
  doYouKnowHiren(questions[i].question, questions[i].answer);
}

var flag =0;
console.log('Highest Scorers : ');
for(var i=0;i<highscores.length;i++){
  console.log(highscores[i]);
  if(score>=highscores[i].score){
    flag++;
  }
}
if(flag>0){
  console.log('You scored the highest! Send me a screenshot to update the list.');
}


