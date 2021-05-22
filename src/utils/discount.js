export const applyDiscountToTotalCost = (price, discount) =>
  price - price * discount;

/**
 * Apply discount to the total cost of items.
 * @param {number} totalCost - total cost of the items
 * @returns {number}
 */
export const getTotalCostAfterDiscount = (totalCost) => {
  if (!totalCost) {
    throw new Error('Please enter the total cost of items.');
  }
  if (isNaN(totalCost)) {
    throw new Error('Please enter a valid type of total cost.');
  }
  switch (totalCost) {
    case totalCost > 1000 && totalCost <= 5000:
      return applyDiscountToTotalCost(totalCost, 0.03);
    case totalCost > 5000 && totalCost <= 7000:
      return applyDiscountToTotalCost(totalCost, 0.05);
    case totalCost > 7000 && totalCost <= 10000:
      return applyDiscountToTotalCost(totalCost, 0.07);
    case totalCost > 10000:
      return applyDiscountToTotalCost(totalCost, 0.1);
    default:
      return totalCost;
  }
};
