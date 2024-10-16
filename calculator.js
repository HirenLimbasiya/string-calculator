
function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters are comma and newline

  // Check for custom delimiter syntax
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
    numbers = numbers.substring(delimiterEndIndex + 1); 
  }

  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

  const negativeNumbers = numArray.filter((num) => num < 0); 
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    ); // Throw error if any negative numbers are found
  }

  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0); // Sum the numbers and return
}

module.exports = { add };
