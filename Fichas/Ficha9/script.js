function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Erro: divisão por zero";
}

function calcular(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

document.addEventListener("DOMContentLoaded", () => {
    const v1 = document.getElementById("value1");
    const op = document.getElementById("operation");
    const v2 = document.getElementById("value2");

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const a = parseFloat(v1.value);
        const b = parseFloat(v2.value);
        const oper = op.value.trim();

        let callback;

        switch (oper) {
            case "add": callback = add; break;
            case "sub": callback = sub; break;
            case "mult": callback = mult; break;
            case "divide": callback = divide; break;
            default:
                alert("Operação inválida. Use: add, sub, mult ou divide.");
                return;
        }

        const resultado = calcular(a, b, callback);

        alert("Resultado: " + resultado);
    });
});