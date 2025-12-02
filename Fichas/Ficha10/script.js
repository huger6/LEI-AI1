function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mult(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) throw new Error("Divisão por zero");
    return a / b;
}

function calculatePromise(operation, a, b) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            try {
                if (!operation) reject(new Error("Operador não definido"));

                let result;
                switch (operation) {
                    case 'add': result = add(a, b); break;
                    case 'sub': result = sub(a, b); break;
                    case 'mult': result = mult(a, b); break;
                    case 'divide': result = divide(a, b); break;
                    default:
                        reject(new Error("Operação inválida"));
                        return;
                }

                resolve(result);
            } catch (err) {
                reject(err);
            }

        }, 1500);
    });
}

function loadHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function saveToHistory(text) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    history.push(text);
    localStorage.setItem("calcHistory", JSON.stringify(history));
}

document.getElementById("calculateBtn").addEventListener("click", () => {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    const op = document.getElementById("operation").value;

    const resultText = document.getElementById("resultText");

    if (isNaN(value1) || isNaN(value2)) {
        resultText.textContent = "Valores inválidos!";
        return;
    }

    resultText.textContent = "A calcular...";

    calculatePromise(op, value1, value2)
        .then(result => {
            resultText.textContent = `Resultado: ${result}`;
            const historyEntry = `${value1} ${op} ${value2} = ${result}`;
            saveToHistory(historyEntry);
            loadHistory();
        })
        .catch(error => {
            resultText.textContent = `Erro: ${error.message}`;
        })
        .finally(() => {
            console.log("Operação finalizada.");
        });
});

document.getElementById("clearStorageBtn").addEventListener("click", () => {
    localStorage.removeItem("calcHistory");
    loadHistory();
});

loadHistory();