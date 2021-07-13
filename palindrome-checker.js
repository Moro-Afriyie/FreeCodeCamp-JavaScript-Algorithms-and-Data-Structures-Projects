function palindrome(str) {
    // Convert the string to lowercase
    let lowerStr = str.toLowerCase();
    // extract only the alphabets and join them
    let originalStr = lowerStr.split(/\W+|_/).join('').split('').join('');
    let reversedStr = lowerStr.split(/\W+|_/).join('').split('').reverse().join('');

    // check if they are equal
    return originalStr === reversedStr;
}

palindrome("eye");