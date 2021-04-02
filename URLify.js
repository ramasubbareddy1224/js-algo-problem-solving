// Replace all spaces with '%20'
//console.log(process.argv)
let args = process.argv.slice(2);
let s = args[0]

// Brute force
function URLify(s = "rama subba reddy") {
    let final = ""
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) === 32) {
            final += "%20"
        } else {
            final += s[i];
        }
    }
    return final;
}

// Trim whitespace at the end
function URLify(s = "rama subba reddy    ") {
    let start = false;
    let array = new Array();
    let final = ""
    for (let i = s.length - 1; i >= 0; i--) {
        let code = s.charCodeAt(i);
        if (start === false && code !== 32) {
            start = true;
        }

        if (start) {
            if (code === 32) {
                array.push("%20")
            } else {
                array.push(s[i]);
            }
        }


    }

    // reverse array 
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;

    }

    // combine array
    for (let i = 0; i < array.length; i++) {
        final += array[i];

    }


    return final;
}


// Trim whitespace at the end simplified
function URLify(s = "rama subba reddy    ") {
    let final = ""
    let lastindex = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let code = s.charCodeAt(i);
        if (code !== 32) {
            lastindex = i;
            break;
        }
    }

    for (let i = 0; i <= lastindex; i++) {
        if (s.charCodeAt(i) === 32) {
            final += "%20"
        } else {
            final += s[i];
        }
    }

    return final;
}

// Trim whitespace at the start
function URLify(s = "   rama subba reddy") {
    let start = false;
    let final = ""
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (start === false && code !== 32) {
            start = true;
        }

        if (start) {
            if (code === 32) {
                final += "%20"
            } else {
                final += s[i]
            }
        }
    }


    return final;
}

// Trim whitespace at the both start and end
function URLify(s = "     rama subba reddy    ") {
    let final = ""
    let lastindex = -1;
    let startindex = -1;

    for (let i = 0; i < s.length / 2; i++) {
        let startcode = s.charCodeAt(i);
        let endcode = s.charCodeAt(s.length - i - 1);
        if (startindex == -1 && startcode !== 32) {
            startindex = i;
        }
        if (lastindex == -1 && endcode !== 32) {
            lastindex = s.length - i - 1;
        }
        if (startindex > -1 && lastindex > -1) {
            break;
        }
    }

    console.log(startindex,lastindex)

    for (let i = startindex; i <= lastindex; i++) {
        if (s.charCodeAt(i) === 32) {
            final += "%20"
        } else {
            final += s[i];
        }
    }

    return final;
}



console.log(URLify(s));