function rot13(str) {
    // an object to store the pairings
    const rot13 = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M'
    }
    let cipherStr = str.split(''); // split the array
    let result = "";
    // loop through each letter in the array
    cipherStr.forEach(letter => {
        // check if it's an alphabet and look for the corresponding value 
        if ((/[a-zA-Z]/).test(letter)) {
            result += rot13[letter];
        }
        // add the non alphabets :)
        else {
            result += letter;
        }
    });

    return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))