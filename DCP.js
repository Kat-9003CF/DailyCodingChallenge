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

console.log(dividesby3('99'))
console.log(dividesby3('85'))


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

    console.log(divideBy3('99'))
    console.log(divideBy3('85'))





















// Split number into separate integers (as an array?)
// Loop through array and add numbers together
// Test whether the result divides by three
// Return true or false



