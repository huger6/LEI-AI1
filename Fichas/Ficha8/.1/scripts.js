document.addEventListener('DOMContentLoaded', () => {
    checkAnswer();
})

let score = 0;

function checkAnswer() {
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    const finishBtn = document.getElementById('finish-btn');
    const scoreBox = document.getElementById('score-value');

    options.forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.dataset.correct === "true";

            if (isCorrect) {
                btn.classList.add('correct');
                score++;
                feedback.textContent = "Certo!";
                feedback.style.display = "block";
            }
            else {
                btn.classList.add('incorrect');
                feedback.textContent = "Errado!";
                feedback.style.display = "block";
            }
            feedback.style.display = "block";
            setTimeout(() => feedback.style.display = "none", 1500);

            // Deactivate other buttons
            const questionDiv = btn.closest('.question');
            questionDiv.querySelectorAll('.option').forEach(o => o.disabled = true);

            // Update scoreboard
            scoreBox.textContent = score;

            // Check if everything was answered
            const allQuestions = document.querySelectorAll('.question');
            const answered = Array.from(allQuestions).every(q =>
                Array.from(q.querySelectorAll('.option')).every(o => o.disabled)
            );

            if (answered) {
                finishBtn.disabled = false;
                finishBtn.textContent = "Ver Resultados";
            }
        })
    })
}

function validate() {
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    const finishBtn = document.getElementById('finish-btn');
    const scoreBox = document.getElementById('score-value');
    let score = 0;

    options.forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.dataset.correct === "true";

            if (isCorrect) {
                btn.classList.add('correct');
                score++;
                feedback.textContent = "Certo!";
            } else {
                btn.classList.add('incorrect');
                feedback.textContent = "Errado!";
            }
            feedback.style.display = "block";
            setTimeout(() => feedback.style.display = "none", 1500);

            // Desativar restantes botões da mesma pergunta
            const questionDiv = btn.closest('.question');
            questionDiv.querySelectorAll('.option').forEach(o => o.disabled = true);

            // Atualizar pontuação
            scoreBox.textContent = score;

            // Verificar se todas foram respondidas
            const allQuestions = document.querySelectorAll('.question');
            const answered = Array.from(allQuestions).every(q =>
                Array.from(q.querySelectorAll('.option')).every(o => o.disabled)
            );

            if (answered) {
                finishBtn.disabled = false;
                finishBtn.textContent = "Ver Resultados";
            }
        });
    });
}
