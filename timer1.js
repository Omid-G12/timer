//process.stdout.write('\x07'); //makes system beep!!!

const input = process.argv.slice(2); //input in seconds
let ordered = input.sort((a, b) => a - b);

const alarm = (time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
};

for (let item of ordered) {
  if (item < 0 || isNaN(item)) {
    return;
  }
  alarm(item*1000) //turns input into ms
};

//no input = no beep PASSED
//(-) input = no beep PASSED
//NaN input = no beep PASSED