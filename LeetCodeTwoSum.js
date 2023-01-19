var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
      if (nums.includes(target - nums[i]) && i !== nums.indexOf(target - nums[i])) {
          return [i, nums.indexOf(target - nums[i])]
      }
  }

};