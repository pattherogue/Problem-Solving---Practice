//FizzBuzz
//You are given a positive integer number n, where it is less than 100 (excluded).
function fizzBuzz (n)
{// if n is not an interger, less than 1, or greater than or equal to 100
  if (!Number.isInteger(n) || n < 1 || n >= 100)
  {
    console.error("Error");
    //stop execution
    return;
  }

  for (let i = 1; i <= n; i++)
  {
    const remainderBy3 = i % 3;
    const remainderBy5 = i % 5;
    //Print FizzBuzz if the number is divisible by both 3 and 5.
    if (remainderBy3 === 0 && remainderBy5 === 0)
    {
      console.log("FizzBuzz");
    } //Print Fizz if the number is divisible by 3.
    else if (remainderBy3 === 0)
    {
      console.log("Fizz");
    } //Print Buzz if the number is divisible by 5.
    else if (remainderBy5 === 0)
    {
      console.log("Buzz");
    }
    //Print the number if it is not divisible by 3 or 5.
    else
    {
      console.log(i);
    }
  }
}

fizzBuzz(0);
fizzBuzz(100);
fizzBuzz(16);

//Letter Count








