import { expect, assert } from 'chai';
import sinon from 'sinon';
import { validaCUIT, digitoVerificador } from '../validaCuit.js';

describe('validaCUIT', function () {
    let stubDigitoVerificador; // Cambia el nombre de la variable aquí

    beforeEach(function () {
        stubDigitoVerificador = sinon.stub(); // Verifica que esto esté correctamente escrito
    });

    it('debería retornar "CUIT válido" para un CUIT correcto', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('20123456787', digitoVerificador);
        expect(resultado).to.equal('CUIT válido');
    });

    it('debería retornar "CUIT inválido" para un CUIT con prefijo inválido', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('40123456789', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT inválido" para un CUIT con 12 dígitos', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('201234567998', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT inválido" para un CUIT con letras en el DNI', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('2012345A89', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT inválido" para un CUIT con dígito verificador incorrecto', function () {
        stubDigitoVerificador.returns(false);
        const resultado = validaCUIT('20123456780', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT inválido" para un CUIT con 12 dígitos', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('201234567821', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT válido" para un DNI con 7 dígitos', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('201234567');
        expect(resultado).to.equal('CUIT válido');
    });



    it('debería retornar "CUIT inválido" para un CUIT con 9 dígitos', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('231234569', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT inválido" para un prefijo con letras', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('2A123456789', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });

    it('debería retornar "CUIT inválido" para formato incorrecto', function () {
        stubDigitoVerificador.returns(true);
        const resultado = validaCUIT('20-12345678-9', digitoVerificador);
        expect(resultado).to.equal('CUIT inválido');
    });
});
