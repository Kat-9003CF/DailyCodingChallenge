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



function XO(str) {
    let xcount = 0;
    let ocount = 0;
    let letters = str.split('')
    for (let letter of letters){
      if (letter === 'o' || letter === 'O'){
        ocount +=1;
      } else if (letter === 'x' || letter === 'X'){
        xcount +=1;
      }
    }
    return (xcount===ocount);
  }



  function miniMaxSum(arr) {
    // sort in order
    let max = 0;
    let min = 0;
    let newArr = arr.sort((a, b) => (a>b))
    console.log(newArr)
    //add first four
    for (let i = 0; i<newArr.length-1; i++){
        min += newArr[i]
        console.log('min: ', min)
    }
    //add last four
    for (let j = 1; j<newArr.length; j++){
        max += newArr[j]
        console.log('max: ', max)
    }
    return min, max
}

miniMaxSum([1, 3, 5, 4, 2])
miniMaxSum([7, 69, 2, 221, 8974])

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