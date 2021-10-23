function alwaysHungry(arr) {
    let foodCount = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy");
            foodCount++;
        }
    }

    if(foodCount == 0) {
        console.log("I'm hungry");
    }
}

//alwaysHungry([3.14, "food", "pie", true, "food"]); // 5
//alwaysHungry([4, 1, 5, 7, 2]);



function highPass(arr, cutoff) {
    let filteredArr = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
//let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result); 


function betterThanAverage(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    let count = 0
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
//let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); 


function reverse(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
//let result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result); 



function fibonacciArray(n) {
    let fibArr = [0, 1];
    while(fibArr.length < n) {
        let prev = fibArr[fibArr.length-1];
        let prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}  
let result = fibonacciArray(10);
console.log(result); 