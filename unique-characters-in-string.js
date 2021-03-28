let s = "abbcd";
// with object
function IsUnique(s) {
    let res = {};
    for (let i = 0; i < s.length; i++) {
        res[s[i]] = (res[s[i]] || 0) + 1
    }
    for (let i in res) {
        if (res[i] > 1) {
            return false;
        }
    }
    return true;
}
console.log(IsUnique(s))

// with Improved

function IsUnique(s) {
    let res = {};
    for (let i = 0; i < s.length; i++) {
        if (res[s[i]]) {
            return false;
        } else {
            res[s[i]] = 1;
        }
    }
    return true;
}
console.log(IsUnique(s))

// without additinal data structure
function IsUniqueWithArray(s) {
    let res = new Array(128); // a=97, A=65
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (res[code] !== undefined) {
            return false;
        } else {
            res[code] = true;
        }
    }
    return true;
}
console.log(IsUniqueWithArray(s))