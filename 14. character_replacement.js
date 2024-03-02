var characterReplacement = function(s, k) {
    let longestL = 0;
    let left = 0;
    let maxFreq = 0;
    let charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, charMap.get(s[right]));

        if (right - left + 1 - maxFreq > k) {
            charMap.set(s[left], (charMap.get(s[left]) || 0) - 1);
            left++;
        }
        longestL = Math.max(longestL, right - left + 1);
    }
    return longestL;
};
