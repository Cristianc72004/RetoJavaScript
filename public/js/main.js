document.getElementById('calcularBtn').addEventListener('click', function() {
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);

    var resultado = cantidad * (porcentaje / 100);

    // Verificar si el resultado tiene parte decimal
    if (resultado % 1 !== 0) {
        resultado = resultado.toFixed(2);
    } else {
        resultado = resultado.toFixed(0); // Convertir a entero si no tiene parte decimal
    }

    document.getElementById('resultadoValor').textContent = resultado;
});

