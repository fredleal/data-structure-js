const sum = (array) => {
    return _sum(array, 0);
};

const _sum = (array, idx) =>{
    if(idx === array.length) return 0;
    return  array[idx] + _sum(array, idx + 1); 
};

console.log(sum([1, 5, 7, -2]));



