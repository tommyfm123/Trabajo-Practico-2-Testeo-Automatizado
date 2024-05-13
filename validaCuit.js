

export function digitoVerificador(cuitSinDigitoVerificador) {

    const base = 11;
    // Asegúrate de que cuitSinDigitoVerificador sea un string
    if (typeof cuitSinDigitoVerificador !== 'string') {
        throw new Error('El argumento debe ser un string');
    }
    const cuitArray = cuitSinDigitoVerificador.split('').map(Number);
    const coeficientes = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let suma = 0;

    for (let i = 0; i < cuitArray.length; i++) {
        suma += cuitArray[i] * coeficientes[i];
    }

    let resultado = base - (suma % base);
    if (resultado === 11) resultado = 0;
    else if (resultado === 10) resultado = 9;

    return resultado === cuitArray[10];
}

// validaCUIT.js
export function validaCUIT(cuit, digitoVerificador) {
    // Verifica si el CUIT tiene la longitud correcta
    if (cuit.length !== 11 && cuit.length !== 10) {
        return 'CUIT inválido';
    }
    // Agrega un 0 en caso de un dni con 7 dígitos
    if (cuit.length === 10) {
        cuit = cuit.slice(0, 2) + '0' + cuit.slice(2);
    }
    // Verifica que los primeros dos dígitos sean prefijos válidos
    const prefijosValidos = ['20', '23', '24', '25', '26', '27', '30', '33', '34'];
    const prefijo = cuit.slice(0, 2);
    if (!prefijosValidos.includes(prefijo)) {
        return 'CUIT inválido';
    }
    // Verifica que los siguientes 8 dígitos sean números
    const dni = cuit.slice(2, 10);
    if (!/^\d+$/.test(dni)) {
        return 'CUIT inválido';
    }
    // Verifica que el último dígito sea el dígito verificador correcto
    if (!digitoVerificador(cuit)) {
        return 'CUIT inválido';
    }

    return 'CUIT válido';
}
