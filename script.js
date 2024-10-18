ocument.getElementbyid("calculate").addEventListener("click", function() {
    //obtener los valores de los impunt
    const num1 = parseFloat(Document.getElementbyid("num1").value);
    const num2 = parseFloat(Document.getElementbyid("num2").value);

    //validar si los numeros son validos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "porfavor escribir el numero validos.";
    } else{
        // Realizar la operacion y mostrar el resultado
        const sum = num1 + num2;
        document.getElementById("result").innerText = "resultado:" + sum;
    }
):