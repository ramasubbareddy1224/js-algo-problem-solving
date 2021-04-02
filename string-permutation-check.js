function IsStringPermutation(s1 = "rama", s2 = "amra") {
    let array = new Array(128);

    if (s1.length !== s2.length) {
        return false;
    }

    // Load all character code into Array from first string
    for (let i = 0; i < s1.length; i++) {
        let code = s1.charCodeAt(i);
        array[code] = (array[code] || 0) + 1;
    }

    // Check same character code existing in secod string
    for (let i = 0; i < s2.length; i++) {
        let code = s2.charCodeAt(i);
        array[code] = (array[code] || 0) - 1;
        if (array[code] < 0) {
            return false;
        }
    }
    return true;

}
let args = process.argv.slice(2);
console.log(IsStringPermutation(args[0], args[1]));

// execute file using
// node string-permutation-check.js
// node string-permutation-check.js abc abd