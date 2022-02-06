let input = document.querySelector('#input');
input.addEventListener('input', inputchange);

//Кнопки +, -, *, /
let plusButton = document.querySelector('#plus')
plusButton.addEventListener('click', plus)

let minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', minus);

let multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', multiply);

let divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', divide);

let sum = document.querySelector('#sum');
sum.addEventListener('click', aqual);

let x2Button = document.querySelector('#x2');
x2Button.addEventListener('click', x2Result);

let rootButton = document.querySelector('#rootButton');
rootButton.addEventListener('click', root)



let onButton = document.querySelector('#onButton');
onButton.addEventListener('click', function(){
    input.value = '';
    a = '';
    sign = '';
    firstValue = '';
    secondValue = '';
    a2 = '';
    input.classList.add('inputOn');
    input.focus();
})

let offButton = document.querySelector('#offButton');
offButton.addEventListener('click', function(){
    input.value = '';
    a = '';
    sign = '';
    firstValue = '';
    secondValue = '';
    a2 = '';

    input.classList.remove('inputOn')
})


let calculatorButton = document.querySelector('.calculator_button_block');
calculatorButton.addEventListener('click', function(event){
    if(!event.target.classList.contains('numb')) return;
    
    a2 = (a2) + event.target.textContent;
    input.focus();
    input.value = Number(a2);
    a = Number(a2);
    
})

let a2 = '';
//--------------------------------------------
let a;
let sign;
let firstValue;
let secondValue;

function inputchange(){
    a = input.value;
}


function root(){
    firstValue = Number(a);
    console.log(firstValue)
        x = Math.sqrt(firstValue);
        input.value = x;
        a = x;
}


function x2Result(){
    firstValue = Number(a);
    console.log(firstValue)
        x2 = firstValue * firstValue;
        input.value = x2;
        a = x2;
}



function plus(){
    firstValue = Number(a);
    console.log(firstValue)
        input.value = '';
        c = '+';
        sign = c;
        console.log(sign)
        a2 = '';
        input.focus();
        setTimeout(function(){
            input.value = '';
        }, 100)
        plusButton.classList.add('green');
        setTimeout(function(){
            plusButton.classList.remove('green');
        }, 1000)
}




function minus(){
    firstValue = Number(a);
    input.value = '';
    c = '-';
    sign = c;
    console.log(sign)
        a2 = '';
        input.focus();
    setTimeout(function(){
        input.value = '';
    }, 100)
    minusButton.classList.add('green');
        setTimeout(function(){
            minusButton.classList.remove('green');
        }, 1000)
}

function multiply(){
    firstValue = Number(a);
        input.value = '';
        c = '*';
        sign = c;
        console.log(sign)
        a2 = '';
        input.focus();
        setTimeout(function(){
            input.value = '';
        }, 100)
        multiplyButton.classList.add('green');
        setTimeout(function(){
            multiplyButton.classList.remove('green');
        }, 1000)
}

function divide(){
    firstValue = Number(a);
        input.value = '';
        c = '/';
        sign = c;
        console.log(sign)
        a2 = '';
        input.focus();
        setTimeout(function(){
            input.value = '';
        }, 100)
        divideButton.classList.add('green');
        setTimeout(function(){
            divideButton.classList.remove('green');
        }, 1000)
}

function aqual(){
    secondValue = Number(a);
        switch(sign){
            case '+':
                result = firstValue + secondValue;
                break
            case '-':
                result = firstValue - secondValue;
                break
            case '*':
                result = firstValue * secondValue;
                break
            case '/':
                result = firstValue / secondValue;
                break

                
        }
        input.value = parseFloat(result.toPrecision(5));
        console.log(result)
        a = input.value;
        input.focus();
}


// Распознавания нажатия клавиш
function keyHeandler(event){
    if(event.key == '+'){
        plus()
    }
     if(event.key == '-'){
       minus()
    }

     if(event.key == '*'){
        multiply()
    }

    if(event.key == '/'){
        divide()
    }


    if(event.key == 'Enter'){
        aqual();
    }
}





