function Sorter(k, array){
    let i = 0;
    let num = k;
    while (i<array.length-1){
        let j = [i+1]
        while (j<array.length){
            if((array[i] + array[j]) === num){
            return `True: ${array[i]} plus ${array[j]} equals ${num}`;
            }
            j++;
        } 
        i++;
    }
    return false;
}


console.log(Sorter(17, [10, 15, 3, 7]));
console.log(Sorter(17, [11, 15, 3, 7]));
console.log(Sorter(125, [1, 15, 3, 7, 100, 25]));