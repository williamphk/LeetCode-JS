var lengthOfLongestSubstring = function(s) {
    let longestL = 0;
    let left = 0;
    let charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        charMap.set(s[right], right);
        longestL = Math.max(longestL, right - left + 1);
    }
    return longestL;
};
