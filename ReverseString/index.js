const reveseString = (str) => {
  let goo = [];
  for (let i = str.length; i >= 0; i--) {
    goo.push(str[i]);
  }
  return goo.join("");
};
const reveseString1 = (str) => {
  let stre = str.split("").reverse();

  return stre.join("");
};
console.log(reveseString("goooooobb"));
console.log(reveseString1("goooooobb"));
