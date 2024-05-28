document.getElementById('calcularBtn').addEventListener('click', function() {
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);

    var resultado = cantidad * (porcentaje / 100);

    document.getElementById('resultadoValor').textContent = resultado;
});

