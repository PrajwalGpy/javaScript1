// function countAqurence(str, chr) {
//   count = 0;
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] == chr) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countAqurence("charattT goooo", "o"));

const count = (str, char) => {
  console.log(str.split(char).length - 1);
};
count("charattT goooo", "o");
