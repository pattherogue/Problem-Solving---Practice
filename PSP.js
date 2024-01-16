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
//You are given a string `word` consisting of alphabetical characters.
function letterCount (word)
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
//	if word is not a string of alphabetical characters:
  if (typeof word !== "string")
  {
    //	print Error and stop
    console.error("Error");
    return;
  }


  for (const letter of word)
  {
    //if dictionary already has the letter:
    if (!alphabet.includes(letter.toLowerCase()))
    {
      console.error("Error");
      return;
    }
  }
//create a dictionary to hold letter counts
  let letterCounts = {};
//for each letter in word:
  for (let letter of word)
  {
    let lowerCaseLetter = letter.toLowerCase();

    //If the letter is already in the dictionary, increment its count
    if (letterCounts[lowerCaseLetter] !== undefined)
    {
    //increment the count of the letter by 1
      letterCounts[lowerCaseLetter]++;
    }
    else
    {
    // set the count of the letter to 1
      letterCounts[lowerCaseLetter] = 1;
    }
  }
//	return the dictionary that holds the letter counts
  return letterCounts;
}

letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));








