// 29-08-2024
/* 

    Probelm: Give an integer 'n'. Find the factorial of that integer 

    The factorial of a non-negative integer 'n', denoted n!, is the product of all +ve integers less than or equal to 'n'

    Factorial of zero is 1
    Factorial(4) = 4 * 3 * 2 * 1 = 24
    Factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
*/

function RecursiveFactorial(n)
{
    if(n == 0)
    {
        return 1
    }
    
    return n * RecursiveFactorial(n-1)
}

// Big O => O(n) Linear time complexity
console.log(RecursiveFactorial(0))
console.log(RecursiveFactorial(4))
console.log(RecursiveFactorial(5))