// 3 types of edit can be performed on strings : insert/remove/replace a characters. 
// write a function to check if they are one edit(or zero edit) away

const args = process.argv.slice(2);

function IsStringsOneAway(s1 = "pale", s2 = "ple") {
    if (s1.length <= 1 && s2.length <= 1) {
        return true;
    }
    const charcount = {};
    for (let i = 0; i < s1.length; i++) {
        const code = s1.charCodeAt(i);
        if (code !== 32) {
            charcount[s1[i]] = (charcount[s1[i]] || 0) + 1
        }
    }

    for (let i = 0; i < s2.length; i++) {
        const code = s2.charCodeAt(i);
        if (code !== 32) {
            const s2count = (charcount[s2[i]] || 0);
            charcount[s2[i]] = s2count === 0 ? 1 : s2count - 1;
        }
    }
    console.log(charcount)
    const remainingCharCount = Object.values(charcount).reduce((acc, cur) => acc = acc + cur, 0)
    return remainingCharCount <= 2;

}
console.log(IsStringsOneAway(args[0], args[1]));

// without extra space
function IsStringsOneAway1(s1 = "pale", s2 = "ple") {
    if (s1.length <= 1 && s2.length <= 1) {
        return true;
    }

    if (s2.length > s1.length) {
        let temp = s1;
        s1 = s2;
        s2 = s1;
    }
    let diffchar = false;
    let index1 = 0;
    let index2 = 0;
    while (index1 < s1.length && index2 < s2.length) {
        if (s1.charCodeAt(index1) !== s2.charCodeAt(index2)) {
            if (diffchar) {
                return false;
            }
            diffchar = true;
            index1++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}
console.log(IsStringsOneAway1(args[0], args[1]));