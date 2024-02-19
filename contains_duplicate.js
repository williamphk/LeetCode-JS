var containsDuplicate = function(nums) {
    const uniqueSet = new Set(nums);
    if (nums.length > uniqueSet.size) return true;
    else return false;
};
