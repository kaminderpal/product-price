import { getTotalCostOfAllItems } from './totalCost';

describe('Total Cost', () => {
  describe('Get total cost of the items', () => {
    it('should return total cost of all items when number of items and price per items are provided', () => {
      const totalCost = getTotalCostOfAllItems(500, 2);

      expect(totalCost).toEqual(1000);
    });
  });
});
