var minWindow = function(s, t) {
    let left = 0;
    let minLen = Infinity;
    let start = 0;

    let tMap = new Map();
    let sMap = new Map();
    let have = 0;
    let need = tMap.size;

    for (const char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    for (let right = 0; right < s.length; right++) {
        sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);

        if (tMap.has(s[right]) && sMap.get(s[right]) === tMap.get(s[right])) {
            have++;
        }

        while (have === need) {
            if ((right - left + 1) < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            
            sMap.set(s[left], sMap.get(s[left]) - 1);
            if (tMap.has(s[left]) && sMap.get(s[left]) < tMap.get(s[left])) {
                have--;
            }
            left++;
        }
    }
    
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
