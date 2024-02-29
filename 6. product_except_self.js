var productExceptSelf = function(nums) {
    const n = nums.length;
    let ans = Array(n);
    ans.fill(1);
    let curr = 1;

    for (let i = 0; i < n; i++) {
        ans[i] *= curr;
        curr *=nums[i];
    }
    curr = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= curr;
        curr *= nums[i];
    }
    return ans;
};
