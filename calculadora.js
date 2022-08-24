const prompt = require("prompt-sync")();

    let rest = null
    let operation = null

while (operation != 0) {
    console.log("Escolha a operação aritmética:")
    console.log("1: Adição | 2: Subtração | 3: Multiplicação | 4: Divisão | 0: Sair")

    operation = prompt("Digite a operação: ");
    if (operation == 0) {
        console.log("Finalizando calculadora!")
        break
}

    firstValue = parseInt(prompt("Digite o primeiro número: "))
    secondValue = parseInt(prompt("Digite o segundo número: "))

    if (operation == 1) {
        resultado = firstValue + secondValue
    }
    else if (operation == "2") {
        resultado = firstValue - secondValue
    }
    else if (operation == "3") {
        resultado = firstValue * secondValue
    }
    else if (operation == "4") {
        resultado = firstValue / secondValue
        rest = firstValue % secondValue
    }
    
    else {
        resultado = "Operador " + operation + " não suportado, escolha as opções: 1, 2, 3, 4 ou 0."
    }
    console.log("O resultado da operação é: " + resultado)
    if (rest != 0) {
        console.log("O resto da operação é: " + rest)
    }

}