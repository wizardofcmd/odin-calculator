const calcButtons = document.querySelector("#buttons-container");
let currentOperation = [];
let total = 0;

calcButtons.addEventListener("click", function(event) {
    const target = event.target;
    const number = target.dataset.value;
    const isEqualsBtn = target.querySelector("#equals");

    if (number || number === 0) {
        // currentOperation.push(+number);
        // console.log(`Number added to array: ${number}`);
    }
    else if (isEqualsBtn) {
        // evaluateOperation(currentOperation);
    }
});

function evaluateOperation(input) {
    console.log(input);
}