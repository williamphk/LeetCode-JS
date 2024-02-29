var isPalindrome = function(s) {
    // method 1
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    reversed = s.split("").reverse().join("");
    return s == reversed

    //method 2
    if (!s.length) return true;

    let start = 0;
    let end = s.length - 1;
    const isAlphaNumeric = char => /^[a-z0-9]+$/i.test(char);

    while(start <= end) {
        let currFirst = s.charAt(start);
        let currEnd = s.charAt(end);

        if (!isAlphaNumeric(currFirst)) {
            start++;
        } else if (!isAlphaNumeric(currEnd)) {
            end--;
        } else {
            if (currFirst.toLowerCase() != currEnd.toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }
    }
    return true;
};
