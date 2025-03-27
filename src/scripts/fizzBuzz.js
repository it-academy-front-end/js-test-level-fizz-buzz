/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 

    historial = [[]];
    let resp = "";

    function fizzBuzz(num) {
        if (num != 0) {
            if (num % 3 === 0 && num % 5 == 0) {
                resp = 'FizzBuzz';
                return resp;
            } else if (num % 3 === 0) {
                resp = 'Fizz';
                return resp;
            } else if (num % 5 === 0) {
                resp = 'Buzz';
                return resp;
            } else {
                return 'no es multiplo';
            }
        }
    }