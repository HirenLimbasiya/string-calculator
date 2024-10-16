
function add(numbers) {
  if (numbers === "") return 0;

  const numArray = numbers.split(/,|\n/).map((num) => parseInt(num, 10));

  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = { add };
