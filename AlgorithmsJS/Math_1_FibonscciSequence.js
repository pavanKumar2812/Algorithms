/*
    Problem: Wrtie an algorithm, it need to take a num and return the sequence of fibonacci numbers upto the given number
*/

function fibonacci(num)
{
    let fibonacci = [0, 1]
    for(let i=2; i<=num; i=i+1)
    {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    return fibonacci
}
// Big-O O(n)

console.log(fibonacci(2));
console.log(fibonacci(6));
console.log(fibonacci(9));
console.log(fibonacci(7));