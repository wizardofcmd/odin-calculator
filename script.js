const buttonsContainer = document.querySelector("#buttons-container");
const calcButtons = document.querySelectorAll(".calc-button");
const screenText = document.querySelector(".screen-text");
let currentOperation = [];
let prevClicked = false;
let isDecimalPresent = false;
let total = 0;

buttonsContainer.addEventListener("click", function (event) {
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
        if(!prevClicked) {
            screenText.textContent = "";
        }
        num = Number(number ? number : targetParent.dataset.value);
        screenText.textContent += num;
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
        if (!prevClicked || isDecimalPresent) {
            console.log("sneaky devil tryna press decimals in an invalid place!");
            return;
        }
        screenText.textContent += ".";
        isDecimalPresent = true;
    }

    prevClicked = event.target;
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

buttonsContainer.addEventListener("mouseover", function (event) {
    event.stopPropagation();
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
