function FindSecondLargest(arr)
{
    let Largest = arr[0];
    let SecondLargest = -Infinity;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > Largest) {
            SecondLargest = Largest
            Largest = arr[i];
        } else if(arr[i] < Largest && arr[i] > SecondLargest) {
            SecondLargest = arr[i];
        }
    }

    return SecondLargest;
}

console.log(FindSecondLargest([10,5,6,7,9,2,4,10,9]))