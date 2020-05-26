var currentQuestion = 0;
var score = 0;

var container = document.getElementById('quizcontainer');
var questionEl = document.getElementById('question')
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var totQuestions = questions.length;
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = "Question n°" + (questionIndex + 1) + ' ' + ":" + " "+ q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion (){
    
    var optionchoisi = document.querySelector('input[type=radio]:checked');
    
    if(!optionchoisi){
        alert('You must check at least one box!');
    return
    }

    var answer = optionchoisi.value;
    if(questions[currentQuestion].answer == answer){
        score +=1;
    }
    optionchoisi.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'You\'re done !'
    }
    if(currentQuestion == totQuestions){
        container.style.displan = 'none';
        resultCont.style.display = '';
        
        if(score<7){
            resultCont.textContent = 'Your score is ' + score + ' ' + ' > Too bad, try to do better next time :)';
        }else{
        resultCont.textContent = 'Your score is ' + score + ' ' + '> It\'s very good !';
        }
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);