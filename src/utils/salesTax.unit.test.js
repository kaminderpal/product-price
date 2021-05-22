import { applySalesTaxToTotalCost } from './salesTax';

describe('Sales Tax', () => {
  describe('Apply Sales tax to total cost of the items', () => {
    it('should return total cost of all theitems with sales tax applied when total cost is provided', () => {
      const totalCostAfterDiscount = applySalesTaxToTotalCost(500, 'ON');

      expect(totalCostAfterDiscount).toEqual(565);
    });
  });
});
