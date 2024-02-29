var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        map.set(sorted, map.get(sorted) ?? []);
        map.get(sorted).push(str);
    }

    return Array.from(map.values());
};
