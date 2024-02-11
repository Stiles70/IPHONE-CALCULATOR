function appendToDisplay(value) {
    document.getElementById('inp').value += value;
}

function calculate() {
    var result = eval(document.getElementById('inp').value);
    // document.getElementById('inp').value = result;
    answer.innerHTML = result
    document.getElementById('inp').value = ''
}



// function calculate() {
//     var input = document.getElementById('inp').value;
//     var result = evaluateExpression(input);
//     // document.getElementById('inp').value = result;
//     answer.innerHTML = result
//     document.getElementById('inp').value = ''
// }

// function evaluateExpression(expression) {
//     try {
//         return new Function('return ' + expression)();
//     } catch (error) {
//         return 'Error';
//     }
// }


// function calculate() {
//     let x = document.getElementById('inp').value
//     let y = document.getElementById('inp').value
//     let z = x * y
//     console.log(z);
// }