var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let maxLength = 1;
    let tempLength = 1;
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
         if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                tempLength++;
            } else {
                maxLength = Math.max(maxLength, tempLength);
                tempLength = 1;
            }
        }
    }
    
    maxLength = Math.max(maxLength, tempLength);

    return maxLength;
};
