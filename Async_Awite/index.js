let p = new Promise((resolve) => {
  setTimeout(() => {
    console.log(resolve("hooooooooo"));
  }, 5000);
});

async function gooo() {
  console.log("hiodsfsdf");
  let gooo = await p;
  console.log(gooo);
}
gooo();

// gooo().then((res) => console.log(res));
// console.log("gooo");
