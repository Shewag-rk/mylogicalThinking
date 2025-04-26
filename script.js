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



let myint = -123 ,  str =  myint.toString() , strNum = str.split(''), emptyStr = ''

// console.log(strNum);

if(strNum[0] === '-'){
    strNum[0].slice(0);
    emptyStr = str[0]
    console.log(emptyStr);
}
if(strNum[0] !== emptyStr){
    strNum.reverse().join(strNum)
    console.log(strNum);
    
}