encode(strs) {
    let result = '';
    for (let s of strs) {
        result += `${s.length}#${s}`;
    }
    return result;
}

decode(str) {
    let result = [];
    let i = 0;
    const n = str.length
    while (i < n) {
        let delimiterIndex = str.indexOf('#', i);
        let size = Number(str.substring(i, delimiterIndex));
        i = delimiterIndex + 1;
        result.push(str.substring(i, i + size));
        i += size;
    }

    return result;
}
