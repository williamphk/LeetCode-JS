var isAnagram = function(s, t) {
    return s.split("").sort().toString() == t.split("").sort().toString();
};
