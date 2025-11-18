document.addEventListener('DOMContentLoaded', function () {
    exerc2();
})

function exerc1() {
    const btn = document.getElementById('btn');
    // console.log(btn.innerHTML);
    btn.addEventListener('click', () => {
        if (btn.innerText === "Falso") 
            btn.innerText = "Verdadeiro";
        else btn.innerText = "Falso";
    })
}

function exerc2() {
    const btn = document.getElementById('btn');
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    btn.addEventListener('click', () => {
        index = days.indexOf(btn.innerText);
        if (index == 6) index = 0;
        else index++;
        btn.innerText = days[index];
    })
}
