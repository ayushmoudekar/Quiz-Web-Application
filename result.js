document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('quizResults'));
    if (results) {
        document.getElementById('resultName').textContent = `Name: ${results.userName}`;
        document.getElementById('totalTime').textContent = `Total Time Taken: ${results.totalTime}`;
        document.getElementById('totalQuestions').textContent = `Total Questions: ${results.totalQuestions}`;
        document.getElementById('attempt').textContent = `Attempt: ${results.totalQuestions}`;
        document.getElementById('correctQuestions').textContent = `Correct Questions: ${results.correctQuestions}`;
        document.getElementById('wrongQuestions').textContent = `Wrong Questions: ${results.wrongQuestions}`;
        document.getElementById('percentage').textContent = `Score: ${results.percentage.toFixed(2)}%`;
    }
});

function startAgain() {
    window.location.href = 'quiz.html';
}

function goHome() {
    window.location.href = 'index.html';
}
