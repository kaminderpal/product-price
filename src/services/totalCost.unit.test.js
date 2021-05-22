import { getTotalCost } from './totalCost';

describe('Total Cost Service', () => {
  describe('Get Total cost of all the items', () => {
    it('should return total cost of items when number of items, price of item and province is provided', () => {
      const totalCost = getTotalCost(500, 1, 'ON');

      expect(totalCost).toEqual(565);
    });
  });
});
