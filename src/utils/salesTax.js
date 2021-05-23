const taxRate = {
  AB: 5,
  ON: 13,
  QC: 14.975,
  MI: 6,
  DE: 0,
};

/**
 * Apply sales tax to the total cost based on provinceCode.
 * @param {number} totalCost - total cost of the items
 * @param {string} provinceCode - province code where items are purchased.
 * @returns {number}
 */
export const applySalesTaxToTotalCost = (totalCost, provinceCode) => {
  if (!totalCost) {
    throw new Error('Please enter total cost of the items.');
  }
  if (isNaN(totalCost) || typeof totalCost !== 'number') {
    throw new Error('Please enter valid type of total cost.');
  }
  if (!provinceCode) {
    throw new Error('Please provide the province code.');
  }
  if (!taxRate[provinceCode]) {
    throw new Error('Province doesn`t exist.');
  }

  return totalCost + (totalCost * taxRate[provinceCode]) / 100;
};
