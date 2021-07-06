const sum = (array) => {
    if (array.length === 0) return 0;
    const rest = array.slice(1); //corta e inicia pela posicao [1](2);
    return array[0] + sum(rest);
};

console.log(sum([1, 5, 7, -2]));