//variables

let cuadrados = document.querySelectorAll('.square')

let numeros = []

let resultado = []

let num1

let num2

let res

let multi

let mensaje = document.querySelector('#message')

let clickedNum

let h1 = document.querySelector('h1')

let reset = document.querySelector('#reset')

let nivel = document.querySelectorAll('.nivel')

let numberOfSquares

//codigo

init()

//funciones

function init (){
    resetear()

    listeners()
}

function desaparecer (){
    clickedNum = this.textContent

    if (resultadoFin.split(' x ')[0]*resultadoFin.split(' x ')[1] == clickedNum){ 

        mensaje.textContent = 'Perfecto!'; 
        h1.style.backgroundColor = 'blue';
        changeColors ('blue');
        for(i=0; i<cuadrados.length; i++){
            cuadrados[i].classList.remove('hidden');
            cuadrados[i].classList.add('visible');
            cuadrados[i].textContent = clickedNum
        }}
    
    else {
        this.classList.remove('visible');
        this.classList.add('hidden');
        mensaje.textContent = 'Intenta  otra  vez';
        }
    }
   
function changeColors (InsertColor){
    for( i = 0; i < cuadrados.length; i++ ){
        cuadrados[i].style.backgroundColor = InsertColor
    }
}

function pickColor (min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

function randomNum1(num){
    num1 = []
    let n1
    for( i = 0; i < num; i++){
        n1 = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
        num1.push(n1)
    }
    return num1
}

function randomNum2 (num){
    num2 = []
    let n2
    for( i = 0; i < num; i++){
        n2 = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
        num2.push(n2)
    }
    return num2
}


function resetear (){

    if(nivel[0].classList.contains('selected')){
        numberOfSquares = 3
    }
    else if(nivel[1].classList.contains('selected')){
        numberOfSquares = 6
    }

    for(i=0; i<cuadrados.length; i++){
        cuadrados[i].classList.remove('hidden');
        cuadrados[i].classList.add('visible')
        }

    for(i=3; i<cuadrados.length; i++){
        cuadrados[i].classList.remove('visible')
        }
        
    h1.style.backgroundColor = 'rgb(205, 22, 22)'

    numeros = []
    resultado = []
    randomNum1(numberOfSquares)
    randomNum2(numberOfSquares)

    for( i = 0; i < cuadrados.length; i++ ){
        numeros.push(num1[i]*num2[i])
        resultado.push(`${num1[i]} x ${num2[i]}`)
        cuadrados[i].textContent = numeros[i]}

    resultadoFin = resultado[pickColor(0, numberOfSquares-1)]

    document.querySelector('#colorDisplay').textContent = resultadoFin;
    
    for( i = 0; i < cuadrados.length; i++ ){
        cuadrados[i].addEventListener('click', desaparecer)
        }

    mensaje.textContent = ''

    reset.textContent = 'Nuevos  Números'

    background()
}

function again (){
    if(mensaje.textContent == 'Perfecto!'){
    reset.textContent = 'Jugar  Denuevo?'
    }
}

function dif1 (){
    for(i=0; i<cuadrados.length; i++){
        cuadrados[i].classList.remove('hidden');
        cuadrados[i].classList.add('visible')
        }

    nivel[0].classList.add('selected')
    nivel[1].classList.remove('selected')

    for(i=3; i<cuadrados.length; i++){
        cuadrados[i].classList.add('esconder');
        cuadrados[i].classList.remove('visible')
    }
    
    resetear()
}

function dif2 (){
    nivel[0].classList.remove('selected')
    nivel[1].classList.add('selected')

    for(i=3; i<cuadrados.length; i++){
        cuadrados[i].classList.remove('esconder')
    }

    resetear()
}

function listeners (){
    for( i = 0; i < cuadrados.length; i++ ){
        cuadrados[i].addEventListener('click', desaparecer)
       }
         
   reset.addEventListener('click', resetear)
   
   mensaje.addEventListener('DOMSubtreeModified', again)
   
   nivel[0].addEventListener('click', dif1)
   
   nivel[1].addEventListener('click', dif2)
}

function background (){
    for( i = 0; i < cuadrados.length; i++ ){
        cuadrados[i].style.backgroundColor = 'rgb(205, 22, 22)'
        }
    
    document.querySelector('#colorDisplay').textContent = resultadoFin
}