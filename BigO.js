const calculateAbarege = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.lenght; i++) {
        let number = numbers[i];
        sum += number;
    }

    return sum /numbers.lenght;
};

console.log(calculateAbarege([2, 3, 4, 1])); //