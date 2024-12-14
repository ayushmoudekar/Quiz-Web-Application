let questionIndex = 0;
let score = 0;
let timerInterval;

const questions = [
    // Example question set, you need to populate this array with real questions and options
    {
        question: "What is the capital of France?",
        options: {
            A: "Paris",
            B: "London",
            C: "Rome",
            D: "Berlin"
        },
        answer: "A"
    },
    // Add more questions here...
];

function startQuiz() {
    // Start timer
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
    
    // Load the first question
    loadQuestion();
}

function loadQuestion() {
    const question = questions[questionIndex];
    document.getElementById('questionNumber').textContent = `Question ${questionIndex + 1}`;
    document.getElementById('questionText').textContent = question.question;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        const optionKey = String.fromCharCode(65 + index);
        option.textContent = `${optionKey}. ${question.options[optionKey]}`;
    });
}

function selectAnswer(selectedOption) {
    const question = questions[questionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    // Load next question or end quiz
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function nextQuestion() {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        loadQuestion();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    const userName = localStorage.getItem('userName');
    const totalTime = document.getElementById('timer').textContent;
    const totalQuestions = questions.length;
    const correctQuestions = score;
    const wrongQuestions = totalQuestions - score;
    const percentage = (score / totalQuestions) * 100;

    localStorage.setItem('quizResults', JSON.stringify({
        userName,
        totalTime,
        totalQuestions,
        correctQuestions,
        wrongQuestions,
        percentage
    }));

    window.location.href = 'result.html';
}

document.addEventListener('DOMContentLoaded', startQuiz);
