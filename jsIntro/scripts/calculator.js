function add(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1)+parseInt(num2);
    document.getElementById('result').innerHTML = 'Result: '+result;
}

function sub(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1)-parseInt(num2);
    document.getElementById('result').innerHTML = 'Result: '+result;
}

function multiply(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1)*parseInt(num2);
    document.getElementById('result').innerHTML = 'Result: '+result;
}

function divide(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseInt(num1)/parseInt(num2);
    document.getElementById('result').innerHTML = 'Result: '+result;
}