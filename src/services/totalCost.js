import { getTotalCostOfAllItems } from '../utils/totalCost';
import { getTotalCostAfterDiscount } from '../utils/discount';
import { applySalesTaxToTotalCost } from '../utils/salesTax';

/**
 * Get total cost of the product
 * @param {number} numberOfItems - number of items purchase by vendor.
 * @param {number} pricePerItem  - price paid for each item.
 * @param {string} provinceCode - place where items where purchased.
 * @returns {number} totalCost
 */

export const getTotalCost = (numberOfItems, pricePerItem, provinceCode) => {
  const totalCost = getTotalCostOfAllItems(numberOfItems, pricePerItem);
  const applyDiscountonTotalCost = getTotalCostAfterDiscount(totalCost);
  const applySalesTaxOnTotalCost = applySalesTaxToTotalCost(
    applyDiscountonTotalCost,
    provinceCode
  );
  return applySalesTaxOnTotalCost;
};

export default getTotalCost;
