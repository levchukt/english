let question_field = document.querySelector('.test_question')
let answer_buttons = document.querySelectorAll('.test_answer')
let container_h3 = document.querySelector('.test_title')
let container_main = document.querySelector('.test_container')
let container_start = document.querySelector('.container_start')

let start_button = document.querySelector('.test_start')

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


class Question {
    constructor(question,answer_1,answer_2,correct,answer_4,answer_5) {
        this.question = question
        this.correct = correct
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ]
    }


    display () {
        question_field.innerHTML = this.question
        shuffle(this.answers)
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}


let current_questions = [
new Question("between", "6", "2", "4", "10", "3"),
new Question("wait", "6", "4", "5", "10", "3"),
new Question("audience", "6", "4", "8", "10", "3"),
new Question("listen", "6", "4", "8", "10", "3"),
new Question("fork", "6", "4", "8", "10", "3"),
new Question("audience", "6", "4", "8", "10", "3"),
new Question("lips", "6", "4", "8", "10", "3"),
new Question("stand", "6", "4", "8", "10", "3"),
new Question("key", "6", "4", "8", "10", "3"),
new Question("confused", "6", "4", "8", "10", "3"),
new Question("behind", "6", "4", "8", "10", "3"),
new Question("reliable", "6", "4", "8", "10", "3"),
new Question("circus", "6", "4", "8", "10", "3"),
new Question("finger", "6", "4", "8", "10", "3"),
]


let correct_answers_given = 0
let total_answers_given = 0
let current_question = current_questions[0]
start_button.addEventListener('click', function () {
    container_main.style.display = 'block'
    container_start.style.display = 'none'
    total_answers_given = 0
    shuffle(current_questions)
    current_question = current_questions[0]
    current_question.display()
    setTimeout(function () {
        container_main.style.display = 'none'
        container_start.style.display = 'flex'
        start_button.innerHTML = 'Ще раз'

    container_h3.innerHTML = 
    `Ви дали ${correct_answers_given} правильних відповідей із ${total_answers_given}. 
    Точність - ${Math.round(correct_answers_given * 100 / total_answers_given)}%.`
        }, 10000)
})







for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно")
            correct_answers_given += 1
            answer_buttons[i].style.background = '#00FF00'
            anime({
                targets: answer_buttons[i],
                backgroundColor: '#a8dadc',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })

        } else {
            console.log("Неправильно")
            answer_buttons[i].style.background = '#FF0000'
            anime({
                targets: answer_buttons[i],
                backgroundColor: '#a8dadc',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })

        }


        total_answers_given += 1
        current_question = current_questions[total_answers_given]
        current_question.display()
    })
}
