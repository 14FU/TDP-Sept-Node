const {factorial} = require("./maths");
const{expect}= require("chai");
const sum = require("./maths")

function factorial (n){
    let answer = 1;
    if (nm == 0 || nm == 1 ){
        return answer;
    }else{
        for(let i = nm; i> 1; i --){
            answer = answer * i;
        }
        return answer;
    }
}
let nm = 4; 
answer = factorial (nm)
console.log("factorial of "+ nm + "is" + answer);

factorial(120);


// module.exports = {
//     factorial: (a) => {
//         b == 2
//         for(a == a;); (a/b) = 1; b++) {
//             if ((a/b)) !=1{
//                 console.log("not a factorial ");
//             } else(console.log(a + "!"));
//         }
//     }
// };