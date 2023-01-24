const buttonsContainer = document.querySelector("#buttons-container");
const calcButtons = document.querySelectorAll(".calc-button");
const screenText = document.querySelector(".screen-text");
let currentOperation = [];
let prevClicked = false;
let prevClickedClass = null;
let isDecimalPresent = false;
let isOperatorLast = false;
let total = 0;

buttonsContainer.addEventListener("click", function (event) {
    // Allow multiple decimals for diff numbers
    // 1.1 - 01 is a bug
    const target = event.target;
    const targetParent = target.parentNode;
    const number = target.dataset.value;
    const operator = target.dataset.operator;

    if (prevClicked) {
        if ((prevClicked.id === "decimal" || prevClicked.parentNode.id === "decimal")
            && !(number || targetParent.dataset.value)) {
            return;
        }
    }

    if (number || targetParent.dataset.value) {
        num = Number(number ? number : targetParent.dataset.value);
        if (num === 0 && !prevClicked) {
            if (screenText.textContent === "0") {
                return;
            }
        }
        else if (num === 0 && screenText.textContent === "0") {
            return;
        }

        if (screenText.textContent === "0") {
            screenText.textContent = "";
        }

        num = num.toString();
        screenText.textContent += num;
        currentOperation.push(num);
        isOperatorLast = false;
    }
    else if (operator || targetParent.dataset.operator) {
        if (isOperatorLast) {
            return;
        }
        action = operator ? operator : targetParent.dataset.operator;
        currentOperation.push(action);
        screenText.textContent += target.textContent.trim();
        isOperatorLast = true;
    }
    else if (target.id === "equals" || targetParent.id === "equals") {
        console.log(`Current operation looks like: ${currentOperation}`);
        result = operate(currentOperation);
        screenText.textContent = result;
        isOperatorLast = false;
    }
    else if (target.id === "decimal" || targetParent.id === "decimal") {
        if (prevClicked != false && isDecimalPresent) {
            return;
        }
        screenText.textContent += ".";
        isDecimalPresent = true;
        isOperatorLast = false;
        currentOperation.push(".");
    }

    prevClicked = event.target;
    prevClickedClass = prevClicked.classList.value;
});

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numTwo / numOne;
}

function operate(operation) {
    let prevItem = "";
    let currentItem = "";
    let currentOperator = null;
    let numOne = "";
    let numTwo = "";
    let total = 0;

    for (let i = 0; i < operation.length; i++) {
        if (currentOperator === null) {
            currentItem = operation[i]
            if (prevItem === "") {
                prevItem = currentItem;
                continue;
            }
            else if ((currentItem === "plus" || currentItem === "minus"
                || currentItem === "divide" || currentItem === "multiply")
                && numOne === "") {
                currentOperator = currentItem;
                numOne = prevItem;
                prevItem = "";
            }
            else {
                prevItem += currentItem;
            }
        }
        else {
            currentItem = operation[i]
            if (prevItem === "") {
                prevItem = currentItem;
                continue;
            }
            else if ((currentItem === "plus" || currentItem === "minus"
                || currentItem === "divide" || currentItem === "multiply")
                && numOne != "") {
                // calc total first
                numTwo = prevItem;
                numOne = Number(numOne);
                numTwo = Number(numTwo);
                switch (currentOperator) {
                    case "plus":
                        total = add(numOne, numTwo);
                        break;
                    case "minus":
                        total = subtract(numOne, numTwo);
                        break;
                    case "multiply":
                        total = multiply(numOne, numTwo);
                        break;
                    case "divide":
                        total = divide(numOne, numTwo);
                        break;
                }
                // then set new operator
                currentOperator = currentItem;
                // then reset numbers etc
                numOne = total.toString();
                prevItem = "";
                numTwo = "";
            }
            else {
                prevItem += currentItem;
            }
        }
    }
    if (numOne != "" && numTwo == "" && currentOperator != null) {
        numOne = Number(numOne);
        prevItem = Number(prevItem);
        switch (currentOperator) {
            case "plus":
                total = add(numOne, prevItem);
                break;
            case "minus":
                total = subtract(numOne, prevItem);
                break;
            case "multiply":
                total = multiply(numOne, prevItem);
                break;
            case "divide":
                total = divide(numOne, prevItem);
                break;
        }
    }
    return total;
}

buttonsContainer.addEventListener("mouseover", function (event) {
    const targetClass = event.target.classList.value;
    const targetParentClass = event.target.parentNode.classList.value;

    if (event.target.id === "equals") {
        event.target.style.backgroundColor = LightenDarkenColor("#fa5252", -50);
    }
    else if (event.target.parentNode.id === "equals") {
        event.target.parentNode.style.backgroundColor = LightenDarkenColor("#fa5252", -50);
    }
    else if (targetClass === "calc-button") {
        event.target.style.backgroundColor = LightenDarkenColor("#82817e", -25);
    }
    else if (targetClass.includes("calc-button operator")) {
        event.target.style.backgroundColor = LightenDarkenColor("#87dee6", -25);
    }
    else if (targetParentClass === "calc-button") {
        event.target.parentNode.style.backgroundColor = LightenDarkenColor("#82817e", -25);
    }
    else if (targetParentClass.includes("calc-button operator")) {
        event.target.parentNode.style.backgroundColor = LightenDarkenColor("#87dee6", -25);
    }
});

buttonsContainer.addEventListener("mouseout", function (event) {
    event.stopPropagation();
    const targetClass = event.target.classList.value;
    const targetParentClass = event.target.parentNode.classList.value;

    if (event.target.id === "equals") {
        event.target.style.backgroundColor = LightenDarkenColor("#fa5252", 0);
    }
    else if (event.target.parentNode.id === "equals") {
        event.target.parentNode.style.backgroundColor = LightenDarkenColor("#fa5252", 0);
    }
    else if (targetClass === "calc-button") {
        event.target.style.backgroundColor = LightenDarkenColor("#82817e", 0);
    }
    else if (targetClass.includes("calc-button operator")) {
        event.target.style.backgroundColor = LightenDarkenColor("#87dee6", 0);
    }
    else if (targetParentClass === "calc-button") {
        event.target.parentNode.style.backgroundColor = LightenDarkenColor("#82817e", 0);
    }
    else if (targetParentClass.includes("calc-button operator")) {
        event.target.parentNode.style.backgroundColor = LightenDarkenColor("#87dee6", 0);
    }
});

function LightenDarkenColor(col, amt) {
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

calcButtons.forEach(elem => {
    elem.addEventListener('mouseover', event => {
        event.target.style.cursor = "pointer";
    })
});

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Delete") {
        currentOperation = [];
        screenText.textContent = "0";
        prevClicked = false;
        prevClickedClass = null;
        isDecimalPresent = false;
        total = 0;
    }
});
