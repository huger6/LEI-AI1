document.addEventListener('DOMContentLoaded', () => {
    // exerc4();
    exerc6();
})

// const number = Math.floor(Math.random() * 10);
const number = Math.floor(Math.random() * 100);

function exerc4() {
    const form = document.getElementById('random-number');
    const btn = document.getElementById('btn');

    console.log(number);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // <- prevent page reload
        const value = parseInt(form.number.value, 10);
        if (value === number) {
            window.alert("Conseguiu");
            btn.disabled = true;
        }
        else {
            form.reset();
        }
    })
}

function exerc6() {
    const form = document.getElementById('random-number');
    const btn = document.getElementById('btn');

    console.log(number);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // <- prevent page reload
        const value = parseInt(form.number.value, 10);
        if (value === number) {
            window.alert("Conseguiu");
            btn.disabled = true;
        }
        else if (value < number) {
            window.alert("Baixo");
            form.reset();
        }
        else if (value > number) {
            window.alert("Alto");
            form.reset();
        }
        else {}
        form.reset();
    })
}