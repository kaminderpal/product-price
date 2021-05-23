import { getTotalCostAfterDiscount } from './discount';

describe('Discount', () => {
  describe('Get total cost of the items after discount', () => {
    it('should return total cost with `discount 0%` when total cost is less than 1000', () => {
      const totalCostAfterDiscount = getTotalCostAfterDiscount(500);

      expect(totalCostAfterDiscount).toEqual(500);
    });

    it('should return total cost with `discount 3%` when total cost is greater than 1000 and less than equal 5000', () => {
      const totalCostAfterDiscount = getTotalCostAfterDiscount(1100);

      expect(totalCostAfterDiscount).toEqual(1067);
    });

    it('should return total cost with `discount 5%` when total cost is greater than 5000 and less than equal 7000', () => {
      const totalCostAfterDiscount = getTotalCostAfterDiscount(5100);

      expect(totalCostAfterDiscount).toEqual(4845);
    });

    it('should return total cost with `discount 7%` when total cost is greater than 7000 and less than equal 10000', () => {
      const totalCostAfterDiscount = getTotalCostAfterDiscount(8100);

      expect(totalCostAfterDiscount).toEqual(7533);
    });

    it('should return total cost with `discount 10%` when total cost is greater than 10000', () => {
      const totalCostAfterDiscount = getTotalCostAfterDiscount(11100);

      expect(totalCostAfterDiscount).toEqual(9990);
    });
  });

  describe('Fail to apply discount', () => {
    it('should throw an error when total cost is not provided', () => {
      const totalCostAfterDiscount = () => getTotalCostAfterDiscount();

      expect(totalCostAfterDiscount).toThrowError(
        'Please enter the total cost of items.'
      );
    });

    it('should throw an error when total cost is not valid type', () => {
      const totalCostAfterDiscount = () => getTotalCostAfterDiscount('2000');

      expect(totalCostAfterDiscount).toThrowError(
        'Please enter a valid type of total cost.'
      );
    });

    it('should throw an error when total cost has type string', () => {
      const totalCostAfterDiscount = () => getTotalCostAfterDiscount('cost');

      expect(totalCostAfterDiscount).toThrowError(
        'Please enter a valid type of total cost.'
      );
    });
  });
});
