export const buildCardNumber = (numbers: number[]) => {
  // Guard clause to ensure at least two numbers are provided
  const sortedNumbers = Number(numbers.sort((a, b) => b - a).join(''));

  return sortedNumbers;
};
