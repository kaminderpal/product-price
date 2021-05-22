import { getTotalCostAfterDiscount } from './discount';

describe('Discount', () => {
  describe('Get total cost of the items after discount', () => {
    it('should return total cost of all items with discount when total cost is provided', () => {
      const totalCostAfterDiscount = getTotalCostAfterDiscount(500);

      expect(totalCostAfterDiscount).toEqual(500);
    });
  });
});
