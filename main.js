let firstNum=document.getElementById('num1');
let secondNum=document.getElementById('num2');
let result=document.getElementById('result');

function add(){
    let x= parseInt(firstNum.value);
    let y= parseInt(secondNum.value);
    let resSum= x + y;
    result.innerHTML= resSum;
    result.style.cssText= "display: block;"
}
function subtract(){
    let x= parseInt(firstNum.value);
    let y= parseInt(secondNum.value);
    let resSum= x - y;
    result.innerHTML= resSum;
    result.style.cssText= "display: block;"
}
function clearInput(){
    result.value="";
    firstNum.value="";
    secondNum.value="";
    result.style.cssText= "display: none;"
}
