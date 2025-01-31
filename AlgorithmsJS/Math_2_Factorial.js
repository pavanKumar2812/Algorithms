
function factorial(num)
{
    let result = 1;
    for (let i=2; i <= num; i++) {
        result = result * i
    }
    return result
}
// Big-O = O(n)

console.log(factorial(2))
console.log(factorial(4))
console.log(factorial(5))