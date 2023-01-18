const calcButtons = document.querySelector("#buttons-container");
let currentOperation = [];
let prevClicked = null;
let total = 0;

calcButtons.addEventListener("click", function (event) {
    const target = event.target;
    const targetParent = target.parentNode;
    const number = target.dataset.value;
    const operator = target.dataset.operator;

    // If a decimal was clicked before, make sure the next input is a number
    if (prevClicked) {
        if ((prevClicked.id === "decimal" || prevClicked.parentNode.id) 
        && !(number || targetParent.dataset.value)) {
            console.log("decimal clicked beforehand!");
            return;
        }
    }

    if (number || targetParent.dataset.value) {
        num = Number(number ? number : targetParent.dataset.value);
        console.log(`number ${num} pressed!`);
        currentOperation.push(num);
    }
    else if (operator || targetParent.dataset.operator) {
        action = operator ? operator : targetParent.dataset.operator;
        console.log(action);
        currentOperation.push(action);
    }
    else if (target.id === "equals" || targetParent.id === "equals") {
        console.log("equals pressed!");
        console.log(`Current operation looks like: ${currentOperation}`);
        operate(currentOperation);
    }
    else if (target.id === "decimal" || targetParent.id === "decimal") {
        currentOperation.push("decimal")
        console.log("decimal pressed!")
    }

    prevClicked = event.target;
    // console.log(currentOperation);
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

function operate(operation) {
    let prevItem = null;

    for (let i = 0; i < operation.length; i++) {
        currentItem = currentOperation[i]
        if (!prevItem) {
            prevItem = currentItem;
            continue;
        }
        else {
            if (typeof currentItem != "string") {

            }
        }
        prevItem = currentItem;
    }
}