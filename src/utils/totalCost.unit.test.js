import { getTotalCostOfAllItems } from './totalCost';

describe('Total Cost', () => {
  describe('Get total cost of the items', () => {
    it('should return total cost of all items when number of items and price per items are provided', () => {
      const totalCost = getTotalCostOfAllItems(500, 2);

      expect(totalCost).toEqual(1000);
    });
    it('should return total cost of all items when number of items and price per items are in fractions', () => {
      const totalCost = getTotalCostOfAllItems(0.1, 0.2);

      expect(totalCost).toEqual(0.02);
    });
  });

  describe('Fail to get total cost', () => {
    it('should throw an error when number of items are not provided', () => {
      const totalCost = () => getTotalCostOfAllItems(null, 0.2);

      expect(totalCost).toThrowError(
        'Please provide number of items purchases.'
      );
    });

    it('should throw an error when number of items are not accurate', () => {
      const totalCost = () => getTotalCostOfAllItems('items', 2);

      expect(totalCost).toThrowError('Please enter valid number of items.');
    });

    it('should throw an error when number of items are accurate but type is not', () => {
      const totalCost = () => getTotalCostOfAllItems('5000', 2);

      expect(totalCost).toThrowError('Please enter valid number of items.');
    });

    it('should throw an error when price per item is not provided', () => {
      const totalCost = () => getTotalCostOfAllItems(5000);

      expect(totalCost).toThrowError('Please provide price of item purchased.');
    });

    it('should throw an error when price per item is accurate but type is not', () => {
      const totalCost = () => getTotalCostOfAllItems(5000, '2');

      expect(totalCost).toThrowError('Please enter valid price per item.');
    });

    it('should throw an error when price per item is not accurate', () => {
      const totalCost = () => getTotalCostOfAllItems(500, 'price');

      expect(totalCost).toThrowError('Please enter valid price per item.');
    });
  });
});
