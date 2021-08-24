const args = process.argv;
let input = args.slice(2);
input.sort((a, b) => {
  return a - b;
});

for (const element of input) {
  let num = parseInt(element);
  console.log('num:', num);
  if (num !== NaN) {
    if (num > 0) {
      timer = element * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer)
    }
  } else {
    continue
  }
};