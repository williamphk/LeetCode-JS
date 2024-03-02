var topKFrequent = function(nums, k) {
    const collection = new Map;

    for (const num of nums) {
        collection.set(num, (collection.get(num) ?? 0) + 1);
    }

    const sortedEntries = Array.from(collection.entries())
                               .sort((a, b) => b[1] - a[1])
                               .slice(0, k)
                               .map(entry => entry[0]);

    return sortedEntries;
};
