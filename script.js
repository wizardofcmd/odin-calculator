const calcButtons = document.querySelector("#buttons-container");
let currentOperation = [];
let total = 0;

calcButtons.addEventListener("click", function(event) {
    const target = event.target;
    const targetParent = target.parentNode;
    const number = target.dataset.value;
    const operator = target.dataset.operator;

    // console.log(targetParent);

    if (number || targetParent.dataset.value) {
        num = Number(number ? number : targetParent.dataset.value);
        console.log(num);
        currentOperation.push(num);
    }
    else if (operator || targetParent.dataset.operator) {
        action = operator ? operator : targetParent.dataset.operator;
        console.log(action);
        currentOperation.push(action);
    }
    else if (target.id === "equals" || targetParent.id === "equals") {
        console.log("operate!");
        currentOperation.push("equals");
    }
    else if (target.id === "decimal" || targetParent.id === "decimal") {
        currentOperation.push("decimal");
        console.log("decimal!")
    }

    console.log(currentOperation);
});

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numTwo - numOne;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numTwo / numOne;
}

function operate() {

}