const titleCase = (str) => {
  let goo = str.toLowerCase().split(" ");
  for (let i = 0; i < goo.length; i++) {
    goo[i] = goo[i][0].toUpperCase() + goo[i].slice(1);
  }
  return goo.join(" ");
};

console.log(titleCase("how asre you "));
