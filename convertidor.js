function convertir() {
    var valore= parseInt(document.getElementById('valor').value);
    var resultado = 0;
    var dolar = 347.50;
    var euro = 373.74;
    var libra = 438.38;
    var real = 70.34;
    if (document.getElementById('uno').checked){
        resultado = valore / dolar;
        alert('El cambio de pesos a Dolares es: $' + resultado.toFixed(2));
    }
    else if (document.getElementById('dos').checked){
        resultado = valore / euro;
        alert('El cambio de pesos a Euros es: $' + resultado.toFixed(2));
    }

    else if (document.getElementById('tres').checked){
        resultado = valore / libra;
        alert('El cambio de pesos a Libras es: $' + resultado.toFixed(2));
    }

    else if (document.getElementById('cuatro').checked){
        resultado = valore / real;
        alert('El cambio de pesos a Reales es: $' + resultado.toFixed(2));
    }

    else{
        alert('te mandaste una cagada :(')
    }
}