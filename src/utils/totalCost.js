/**
 * Get total cost of all items.
 * @param {number} numberOfItems - number of items purchased
 * @param {number} pricePerItem - price of item pruchased.
 * @returns
 */
export const getTotalCostOfAllItems = (numberOfItems, pricePerItem) => {
  if (!numberOfItems) {
    throw new Error('Please provide number of items purchases.');
  }
  if (isNaN(numberOfItems) || typeof numberOfItems !== 'number') {
    throw new Error('Please enter valid number of items.');
  }
  if (!pricePerItem) {
    throw new Error('Please provide price of item purchased.');
  }
  if (isNaN(pricePerItem) || typeof pricePerItem !== 'number') {
    throw new Error('Please enter valid price per item.');
  }
  return parseFloat((numberOfItems * pricePerItem).toFixed(2));
};
