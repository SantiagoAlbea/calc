const fns = {
    sum,
    res,
    mul,
    div,
    pow,
    raiz,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
	return a - b
}

function mul(a, b) {
	return a * b
}

function div(a, b) {
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"
    return (b === 0 ? "Error: div by 0" : a/b);
}

function pow(a, b) {
    return a**b

}

function raiz(a, b) {
    var b=(1/b)
    return (a**b)

}

module.exports = fns;


