// function numberPalindrome(num){
//     for(let i = 0; i < num.length / 2; i++){ 
//         // console.log(num[i]);
//         if(num[i] !== num[num.length - i -1]){
//             return false;
//         }
//     }
//     return true;
// }


// let num = -121, numString = num.toString();
// console.log(numberPalindrome(numString));

// function reverse(x){
//     if(x < 0) return -1 * reverse(-x);
//     const solution = (x+"").split('').reverse().join('');
//     return (solution > 2**31-1) ? 0 : solution;
// };

// console.log(reverse(123))





// var threeSumClosest = function(nums, target){
//     for(let i=0; i<nums.length; i++){
//         console.log(nums[i]);
//         for(let j=nums[i+1]; j<0; j++){
//             console.log(nums[j]);
//         }
//     }
// }


// let nums = [-1,2,1,-4], target = 1;

// console.log(threeSumClosest(nums = [-1,2,1,-4], target = 1))


// let str1 = 'shewag', str2 = 'suriya', arr = [...str1,...str2];

// // console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             arr.splice(j, 1);j---
//             arr.splice(i, 1);i--
//         }
//     }
// }

// let arrLen = arr.length, flames = [ "Friends", "Lover", "Arrange Marriage", "Marriage", "enemy", "sister"];
// while(flames.length > 1){
//     let finalValue = (arrLen - 1) % flames.length;
//     flames = flames.slice(finalValue + 1)
// }

// console.log(flames);

// --------------------------------------------------- //


// Date: 29|02|2025 7 problems:

// 1. flated an nested 
// let array = [1, [2,3], [4,5]];
// const flatedArray = []

// for(let i=0; i<array.length; i++){
    // console.log(array[i]);
//     flatedArray[flatedArray.length] = [...array[i]]
//     console.log(flatedArray);
// }



// 2 captalsization the each first letter as
// const string = 'hello'; 

// for(let i=0; i<string.length; i++){
//     // console.log(string[i]);
//     if(string[i] === string[i].charAt(string[i].length-1)){
//         console.log("yes" + string[i].toUpperCase);
//     }else{
//         console.log("none");   
//     }
// }





// 3 longest words in the sentences.
// string = "Hello, wellcome to program";

// 4  [{()}] = true; [{(}] = flase;  valdation the brackets.

// 5 groups anagram  array = ["bat", "tab", "pat", "tap"]; output = ["bat", "tab"] , ["pat", "tap"];

// 6 junkarray [1,2,3,4,5,6,7] traget (3);

// 7 remove flase in the array 


// function removeFalseValues(values, arr){
// console.log(values);
// for(let i=0; i<values.length; i++){
//     if(values[i] === typeof(String)){
//         arr[arr.length] = values[i]
//         return
//         }
//     }
//     return arr
// }

// let falseValues = [false, 0, -0, "", null, undefined, NaN, "Yokesh"], newArr = []
// console.log(removeFalseValues(falseValues, newArr));