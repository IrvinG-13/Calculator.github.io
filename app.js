const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const result = document.querySelector('.eq');

calc = [];

function reload(){
    window.location.reload()
}


numbers.forEach((num)=>{
    let val = num.value;
    num.addEventListener('click',()=>{
        calc.push(val);
        newDisplay();
    });
});

operators.forEach((op)=>{
    let valOp = op.value;
    op.addEventListener('click',()=>{
        calc.push(valOp);
        newDisplay();
    })
});

result.addEventListener('click', (calculateResult));

function calculateResult() {
    if (calc.length >= 3) {
        
        for (let i = 0; i < calc.length; i++) {
            if (calc[i] === '*') {
                const operando1 = parseFloat(calc[i - 1]);
                const operando2 = parseFloat(calc[i + 1]);
                const resultado = operando1 * operando2;
                calc.splice(i - 1, 3, resultado.toString());
                i -= 2; 
            } else if (calc[i] === '/') {
                const operando1 = parseFloat(calc[i - 1]);
                const operando2 = parseFloat(calc[i + 1]);
                if (operando2 === 0) {
                    alert("Error: División por cero");
                    return;
                }
                const resultado = operando1 / operando2;
                calc.splice(i - 1, 3, resultado.toString());
                i -= 2; 
            }
        }

        
        for (let i = 0; i < calc.length; i++) {
            if (calc[i] === '+') {
                const operando1 = parseFloat(calc[i - 1]);
                const operando2 = parseFloat(calc[i + 1]);
                const resultado = operando1 + operando2;
                calc.splice(i - 1, 3, resultado.toString());
                i -= 2; 
            } else if (calc[i] === '-') {
                const operando1 = parseFloat(calc[i - 1]);
                const operando2 = parseFloat(calc[i + 1]);
                const resultado = operando1 - operando2;
                calc.splice(i - 1, 3, resultado.toString());
                i -= 2; 
            }
        }
        

        if (calc.length === 1) {
            document.querySelector('.display').innerHTML = calc[0];
        } else {
            alert("Error en la expresión");
        }
    }
}

function newDisplay(){
    document.querySelector('.display').innerHTML = calc.join('');
};







