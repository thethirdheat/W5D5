const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  // base case
  if (numsLeft <= 0) {
    completionCallback(sum);
    
  } else {
    reader.question(
      // prompt
      "Gimme some nums plz:\n",
      // callback
      function (num) {
        num = parseInt(num);
        // math operation
        sum += num
        console.log("partial sum: " + sum);
        // recursive call
        addNumbers(sum, numsLeft - 1, completionCallback);
      }
    );
  }
}

addNumbers(0, 3, (sum) => { 
  console.log(`Total Sum: ${sum}`); 
  reader.close();  
} );