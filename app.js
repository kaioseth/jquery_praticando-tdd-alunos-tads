function somarNumeros(li) {
    if (!Array.isArray(arr)) {
        throw new Error("Entrada inválida");
    }

    arr.forEach(element => {
        if (typeof element != 'number') {
            return "Entrada inválida";
        }
    });

    var soma = 0;

    arr.forEach(element => {
        soma += element;
    });

    return soma;
}
