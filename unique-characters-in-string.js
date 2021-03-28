let s = "abcd";
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