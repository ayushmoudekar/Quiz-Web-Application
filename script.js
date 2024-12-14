function startQuiz(category) {
    let userName = document.getElementById('userName').value;
    if (userName) {
        localStorage.setItem('userName', userName);
        window.location.href = `quiz.html?category=${category}`;
    } else {
        alert('Please enter your name.');
    }
}

document.getElementById('enterButton').addEventListener('click', () => startQuiz('default'));
