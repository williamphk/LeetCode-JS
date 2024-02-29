var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            let s = nums[i] + nums[left] + nums[right]

            if (s < 0) {
                left++;
            } else if (s > 0) {
                right--;
            } else if (s == 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] == nums[left + 1]) left++;
                left++;
            }
        }
    }
    return result;
};
