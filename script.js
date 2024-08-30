function calcularMedia() {
    // Obter valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    // Verificar se todos os números são válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById('resultado').innerText = 'Por favor, insira todos os números.';
        return;
    }

    // Calcular a média
    const media = (num1 + num2 + num3 + num4) / 4;

    // Exibir resultado
    document.getElementById('resultado').innerText = `A média aritmética é: ${media.toFixed(2)}`;
}
