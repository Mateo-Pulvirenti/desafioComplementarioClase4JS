function suma(){
    alert(`RESULTADO: ${primerNumero + segundoNumero}`)
}

function resta(){
    alert(`RESULTADO: ${primerNumero - segundoNumero}`)
}

function division(){
    alert(`RESULTADO: ${primerNumero / segundoNumero}`)
}

function multiplicacion(){
    alert(`RESULTADO: ${primerNumero * segundoNumero}`)
}

let saludo = alert(
    `HOLA!
    Bienvenido a la calculadora de Mateo`);

let primerNumero = parseFloat(prompt('Ingrese un numero'))

let operacion = prompt('Seleccione la operacion que desea realizar (+ - . :)');

let segundoNumero = parseFloat(prompt('Ingrese otro numero'));

switch(operacion){
    case '+':
        suma();
        break;

    case '-':
        resta();
        break;

    case '.':
        multiplicacion();
        break;
    
    case ':':
        division();
        break;

    default: 
        alert('Lo siento, soy incapaz de resolver la operacion ingresada. Por favor ingrese una nuevamente');
        break;

}