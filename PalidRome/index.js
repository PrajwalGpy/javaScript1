const palidrome = (str) => {
  let goo = [];
  for (let i = str.length - 1; i >= 0; i--) {
    goo += str[i];
  }
  return goo;
};
console.log(palidrome("mam"));
