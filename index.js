let valuesInput = document.getElementById('values');
let resultsInput = document.getElementById('results');
let addButton = document.getElementById('button');

addButton.addEventListener('click', () => {
    let inputValues = valuesInput.value;
    let valuesArray = inputValues.split(',').map(Number);
console.log(valuesArray);
    let sum = valuesArray.reduce((acc, val) => acc + val,0);
    resultsInput.value = sum;
});