// 29-08-2024
/*
    # What is Recursion?
        Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem

        Recursion is when a function calls itself

    # Why we need Recusion?
        A great technique to simplify your solutions.

        If you find yourself breaking down your problem into smaller versions of the same problem, recursive os very useful.
*/

function RecursiveFibonacci(n)
{
    if(n<2)
    {
        return n
    }
    return RecursiveFibonacci(n-1) + RecursiveFibonacci(n-2)
}

console.log(RecursiveFibonacci(1))
console.log(RecursiveFibonacci(3))
console.log(RecursiveFibonacci(6))

// Big-O => O(n^2) Recursive Method
// Big-O => O(n) Iteration Method

/*
    Recursive isn't always the best option, we get time complexity for recursive fibonacci is n^2. On the other hand we got the O(n) which means linear
*/