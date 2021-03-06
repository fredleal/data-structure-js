const slowSum = (array) => {
    if (array.length === 0) return 0;
    const rest = array.slice(1); //corta e inicia pela posicao [1](2);
    return array[0] + slowSum(rest);
};

const fastSum = (array) => {
    return _fastSum(array, 0);
};

const _fastSum = (array, start) =>{
    if(start === array.length) return 0;
    return  array[start] + _fastSum(array, start + 1); 
};

const input = new Array(9000).fill(1);

const slowStart = Date.now();
console.log(slowSum(input));
const slowEnd = Date.now();
console.log(`n^2 finished in ${slowEnd - slowStart}ms`);

const fastStart = Date.now();
console.log(fastSum(input));
const fastEnd = Date.now();
console.log(`n finished in ${fastEnd - fastStart}ms`);