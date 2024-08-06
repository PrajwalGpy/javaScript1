const MaxNum = (num) => {
  maxcount = num[0];
  for (let i = 1; i <= num.length; i++) {
    if (num[i] >= maxcount) {
      maxcount = num[i];
    }
  }
  return maxcount;
};

const MaxNum2 = (num) => {
  return Math.max(...num);
};
console.log(MaxNum([100, 3, 5, 6, 7, 1, 2, 3, 5, 2, 30, 23, 4, 101]));
console.log(MaxNum2([100, 3, 5, 6, 7, 1, 2, 3, 5, 2, 30, 23, 4, 101]));
