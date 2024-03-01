var maxArea = function(height) {
    let result = 0;

    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        let curr = Math.min(height[left], height[right]) * (right - left);
        result = Math.max(result, curr);

        if (height[left] > height[right]) {
            right--;
        } else {
            left++
        }

    }
        return result;
};
