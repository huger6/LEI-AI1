document.addEventListener('DOMContentLoaded', () => {
    exerc7();
})

function showResult(text) {
    const out = document.getElementById('out');
    out.textContent = text;
}

function exerc7() {
    const n1 = document.getElementById('n1');
    const n2 = document.getElementById('n2');
    const btnMul = document.getElementById('btnMul');
    const btnDiv = document.getElementById('btnDiv');

    btnMul.addEventListener('click', () => {
        showResult(n1.value * n2.value);
    })

    btnDiv.addEventListener('click', () => {
        showResult(n1.value / n2.value);
    })
}
