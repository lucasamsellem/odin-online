export const buildCardNumber = (numbers: number | number[]) => {
  const allNumbers = Array.isArray(numbers) ? numbers : [numbers];

  if (allNumbers.length === 0) return;

  if (allNumbers.length === 1) return allNumbers[0];

  return Number(allNumbers.sort((a, b) => b - a).join(''));
};
