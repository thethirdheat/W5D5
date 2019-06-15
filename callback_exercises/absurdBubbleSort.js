const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(ele1, ele2, callback){
  reader.question(`Is ${ele1} greater than ${ele2}?`,
    function (answer){
      if( answer ==='yes'){
        callback(true)
      }else{
        callback(false) 
      }
    }
  )
}

// askIfGreaterThan(3,5,(isGreaterThan)=>{
//   if(isGreaterThan){
//     console.log("you said yes")
//   }else{
//     console.log("you did not say yes")
//   }
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps , outerBubbleSortLoop){
  console.log(arr,i)
  if( i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        madeAnySwaps = true
      } else {
        console.log("we did not swap")
        madeAnySwaps = false
      }
    })
  }
  if (i === arr.length-1){
    outerBubbleSortLoop(madeAnySwaps)
  }
  
  innerBubbleSortLoop(arr,i+1, madeAnySwaps,outerBubbleSortLoop)
}

function outerBubbleSortLoop( madeAnySwaps){
 console.log("we are in outer bubble sort!")
}


arra = [1, 3, 4, 5, 8, 5, 7]
innerBubbleSortLoop(arra, 0,false, outerBubbleSortLoop)

