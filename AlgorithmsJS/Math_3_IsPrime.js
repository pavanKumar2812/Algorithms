
function IsPrime(num)
{
    if (num < 2)
    {
        return false
    }
    for(let i=2;i<num;i++)
    {
        if(num % i === 0)     
        {
            return false
        }
    }
    return true
}
// Big O = O(n)

// function IsPrime(n){
//     if(n < 2) {
//         return false
//     }
//     for(let i=2; i <= Math.sqrt(n); i++) {
//         if(n % 2 === 0) {
//             return false
//         }
//     }
//     return true
// }
// Big O = O(sqrt(n))

console.log(IsPrime(1))
console.log(IsPrime(5))
console.log(IsPrime(4))