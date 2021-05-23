import { getTotalCost } from './totalCost';

describe('Total Cost Service', () => {
  describe('Get Total cost of all the items', () => {
    it('should return total cost of items when province is ontario', () => {
      const totalCost = getTotalCost(500, 1, 'ON');

      expect(totalCost).toEqual(565);
    });

    it('should return total cost without discount when province is quebec.', () => {
      const totalCost = getTotalCost(500, 1, 'QC');

      expect(totalCost).toEqual(574.875);
    });

    it('should return total cost with discount when province is alberta.', () => {
      const totalCost = getTotalCost(2000, 2, 'AB');

      expect(totalCost).toEqual(4074);
    });

    it('should return total cost with max discount when province is alberta.', () => {
      const totalCost = getTotalCost(2000, 10, 'AB');

      expect(totalCost).toEqual(18900);
    });
  });

  describe('Fail to get total cost of all the items', () => {
    it('should throw an error when province is not provided', () => {
      // jest recommend to wrap the code in a function, to catch the error.
      const totalCost = () => getTotalCost(2000, 2);

      expect(totalCost).toThrowError('Please provide the province code.');
    });

    it('should throw an error when province is provided but doesn`t exist in our system', () => {
      // jest recommend to wrap the code in a function, to catch the error.
      const totalCost = () => getTotalCost(2000, 2, 'abc');

      expect(totalCost).toThrowError('Province doesn`t exist.');
    });

    it('should throw an error when number of items type is not valid', () => {
      const totalCost = () => getTotalCost('2000', 2, 'ON');

      expect(totalCost).toThrowError('Please enter valid number of items.');
    });

    it('should throw an error when type of `pricePerItem` is not valid', () => {
      const totalCost = () => getTotalCost(2000, null, 'ON');

      expect(totalCost).toThrowError('Please provide price of item purchased.');
    });

    it('should throw an error when type of `pricePerItem` is not valid', () => {
      const totalCost = () => getTotalCost('2000', '2', 'ON');

      expect(totalCost).toThrowError('Please enter valid number of items.');
    });
  });
});
