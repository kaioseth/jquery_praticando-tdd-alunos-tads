describe("Função somarNumeros", function () {
    it("deve somar todos os números do array", function () {
        expect(somarNumeros([1, 2, 3])).to.equal(6);
    });

    it("deve retornar 0 para array vazio", function () {
        expect(somarNumeros([])).to.equal(0);
    });

    it("deve lançar erro se entrada não for array", function () {
        expect(() => somarNumeros("teste")).to.throw("Entrada inválida");
    });
});
