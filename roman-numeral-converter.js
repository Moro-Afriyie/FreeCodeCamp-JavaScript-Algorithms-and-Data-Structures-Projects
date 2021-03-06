function convertToRoman(num) {
    const romanSymbols = {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M'
        }
        // create an array of the keys in descending order
    const numbers = Object.keys(romanSymbols).reverse();
    let romanNumeral = "";
    //loop through each key in the romansymbols object
    numbers.forEach(key => {
        while (key <= num) {
            // add the symbol to the romanNumeral
            romanNumeral += romanSymbols[key];
            num -= key; // subtract the value from the number and continue the loop
        }
    });
    return romanNumeral;
}

console.log(convertToRoman(36));