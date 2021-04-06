let args = process.argv.slice(2);

function IsPalindromePermutation(s = "tact coa") {
    if (s.length <= 1) {
        return true;
    }
    const charcount = {}
    let totalchar = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) != 32) {
            totalchar++;
            const count = (charcount[s[i]] || 0);
            charcount[s[i]] = count === 0 ? 1 : count - 1;
        }
    }
    const isEvenLength = totalchar % 2 == 0;
    const remainingCharCount = Object.values(charcount).reduce((acc, cur) => acc = acc + cur, 0)
    if (isEvenLength && remainingCharCount == 0) return true;
    if (!isEvenLength && remainingCharCount == 1) return true;
    return false;

    console.log(charcount, totalchar, isEvenLength, remainingCharCount);


}
console.log(IsPalindromePermutation(args[0]))