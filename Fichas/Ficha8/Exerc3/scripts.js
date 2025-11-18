document.addEventListener('DOMContentLoaded', () => {
    exerc3();
})

function exerc3() {
    const labels = document.querySelectorAll('label');

    labels.forEach(label => {
        label.addEventListener('mouseover', () => {
            label.style.backgroundColor = label.innerText;
        })
        label.addEventListener('mouseout', () => {
            label.style.backgroundColor = "transparent";
        })
    })
}