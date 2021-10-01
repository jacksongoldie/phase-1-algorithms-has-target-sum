const x = [3,8,12,4,11,7]
const y = 10

function hasTargetSum(array, target) {
  debugger;
  const newArray = array.filter(e => e <= target);
  for(let i = 0; i < newArray.length; i++){  //i = 0
    const thisArray = newArray.slice(i); // thisarray = 8 4 7
    console.log(newArray)
    console.log(thisArray)
    for(const el in thisArray){
      if(newArray[i] + el === target)
      return true;
    }
  }
  return false;
}





/* 
  Write the Big O time complexity of your function here
*/

/* 
The function should return true if any pair of numbers in the array adds up to the target number.

get numbers from array less than the target number and set to new array
get first el of array
first number plus iteration
*/

/*
  [3, 8, 12, 4, 11, 7], 10)
  new array = 3 , 8, 4, 7
  i=0
  3 + 8
 3 + 4
 3 + 7 



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
