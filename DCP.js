//ONE



// function Sorter(k, array){
//     let i = 0;
//     let num = k;
//     while (i<array.length-1){
//         let j = [i+1]
//         while (j<array.length){
//             if((array[i] + array[j]) === num){
//             return `True: ${array[i]} plus ${array[j]} equals ${num}`;
//             }
//             j++;
//         } 
//         i++;
//     }
//     return false;
// }


// console.log(Sorter(17, [10, 15, 3, 7]));
// console.log(Sorter(17, [11, 15, 3, 7]));
// console.log(Sorter(125, [1, 15, 3, 7, 100, 25]));


//TWO

function multiplier(array){
    let newArray =[];
    for (let i in array){
        let j = 0;
        newArray[i] = 1;
        while (j<array.length){
            if (parseInt(i)!==j){
                newArray[i] = (newArray[i])*(array[j]);
                j++; 
            } else {
                j++;
            }
            
        } 
    } return newArray;
}

// console.log(multiplier([3, 2, 1]));
// console.log(multiplier([1, 2, 3, 4, 5]));



function dividesby3(num){
// Split number into separate integers (as an array?)
 let digits = [];
 let solution = num.charAt(0)
 // Loop through array and add numbers together
 for (let i = 1; i<digits.length; i++){
    digits.push(num.charAt(i));
 }
 for (let digit of digits){
     solution += digit
 }
 // Test whether the result divides by three
 return (solution%3===0)
}

// console.log(dividesby3('99'))
// console.log(dividesby3('85'))


function divideBy3(num){
    // Create new variable and take first digit
     let solution = parseInt(num.charAt(0))
     // Loop through string and add numbers together
     for (let i = 1; i<num.length; i++){
        solution += parseInt(num.charAt(i));
     }
     // Test whether the result divides by three
     return (solution%3===0)
    }

    // console.log(divideBy3('99'))
    // console.log(divideBy3('85'))


// Split number into separate integers (as an array?)
// Loop through array and add numbers together
// Test whether the result divides by three
// Return true or false



function generateIntegers(a, b){
    //initialise array
    let integers = [];
    //create a loop starting at a and running 'while <= b'
    while (a <= b){
    //add each number to the array
    integers.push(a);
    a++;
    }
    //return array
    return integers;
}

// console.log(generateIntegers(2, 5));



// function generateIntegers(a, b){
//     //initialise array
//     //create a loop starting at a and running 'while <= b'
//     //add each number to the array
//     //return array
// }


function countVowels(sentence){
    //initialise count
    let count = 0;
    //loop over string letters
    for (let i=0; i<=sentence.length; i++)
    if (sentence.charAt(i)==='a'||sentence.charAt(i)==='e'||sentence.charAt(i)==='i'||sentence.charAt(i)==='o'||sentence.charAt(i)==='u'){
        count++;
    }
    //return count 
    return count;
}

// console.log(countVowels('abracadabra'))


// function countVowels2(sentence){
//     //initialise count
//     let count = 0;
//     //initialise array of vowels
//     let vowels = 'aeiou';
//     //loop over string letters
//     for (let i=0; i<=sentence.length; i++){
//         if (vowels.includes(sentence.charAt(i))){
//         count++;
//         console.log(sentence.charAt(i))
//         } 
//         console.log(sentence.charAt(i))
//     }
//     //if in array, add to count
//     //return count 
//     return count;
// }

// console.log(countVowels2('abcd'))







function getMiddle(word){
    newWord = word;
    //base case - when characters > 2, return what's left
    if (newWord.length<=2){
        return newWord;
    }
    //take end letters off and call again
    newWord = newWord.slice(1, newWord.length-1);
    return getMiddle(newWord);
}

// console.log(getMiddle('test'));
// console.log(getMiddle('seven'));
// console.log(getMiddle('a'));
// console.log(getMiddle('if'));
// console.log(getMiddle('thisisabigoldtest'));

function getMiddleChar(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// console.log(getMiddleChar('test'));
// console.log(getMiddleChar('seven'));






function findGap(a, b){
    // determine whether a or b is bigger
    let start
    let finish
    let total = 0

    if (a===b){
        return a;
    }
    else if (a<b){
        start = a;
        finish = b;
    }
    else {
        start = b,
        finish = a;
    }
    
    // console.log(start, finish)
    //loop through numbers
    while (start <= finish){
        total += start;
        start++;
    }
    return total
}

// console.log(findGap(0,3)); // should be 6
// console.log(findGap(3,0)); // should be 6
// console.log(findGap(3,3)); // should be 3



function ternaryGap(a, b){
    let total = 0; 

    if (a===b){
        return a;
    }
    let start = (a<=b) ? a : b;
    let finish = (start === a) ? b : a;

    // console.log (start, finish)
    while (start <= finish){
        total += start;
        start++;
    }
    return total
}

// console.log(ternaryGap(0,3)); // should be 6
// console.log(ternaryGap(3,0)); // should be 6
// console.log(ternaryGap(3,3)); // should be 3


// A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

//     if n is even, the next number in the sequence is n / 2
//     if n is odd, the next number in the sequence is 3n + 1

// It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

function collatz(n){
let sequence = [n]
while (n>1){
    if (n%2===0){
        n=n/2
        sequence.push(n)
    }
    else {
        n=(3*n)+1
        sequence.push(n)
    }
}
return sequence
}

console.log(collatz(3))
console.log(collatz(0))
console.log(collatz(100))


function segment(x, space) {

  //initialise array of minimums
  let minimums = [];
  //keep track of starting index
  let xValue = 0;
  /* work out how many groups of x there will be (number of numbers - (x-1) = groups)*/
  let segments = space.length - (x-1)
  console.log('number of segs', segments);
  //for the number of x groups 
  for (let i = 1; i<=segments; i++){
  //     //get first segment
      let currentSeg = [];
      for (let j = xValue; j<(xValue+x); j++){
          currentSeg.push(space[j]);
      }
      xValue+=1;
      console.log('current', currentSeg)
      //get minimum and store
      let smallest = currentSeg[0];
      for (let value of currentSeg){
          if (value<smallest){
              smallest = value;
          }
          console.log(smallest);
      }            
      minimums.push(smallest);
      console.log(minimums);
      currentSeg = [];
  }    
  //find max of mins
  let maxOfMins = minimums[0]
  console.log('minimums', minimums)
  for (let min of minimums){
      console.log(maxOfMins,' vs ', min)
      if (min>maxOfMins){
      maxOfMins = min;
  }
  
  }return('max', maxOfMins);
}
  console.log(segment(1, [1, 5, 1, 2, 3, 1, 2]))