import { applySalesTaxToTotalCost } from './salesTax';

describe('Sales Tax', () => {
  describe('Apply Sales tax to total cost of the items', () => {
    it('should return total cost of all the items with sales tax applied when total cost is provided', () => {
      const totalCostAfterSalesTax = applySalesTaxToTotalCost(500, 'ON');

      expect(totalCostAfterSalesTax).toEqual(565);
    });

    it('should return total cost of all the items with sales tax applied when province is alberta', () => {
      const totalCostAfterDiscount = applySalesTaxToTotalCost(500, 'AB');

      expect(totalCostAfterDiscount).toEqual(525);
    });

    it('should return total cost of all the items with sales tax applied when province is quebec', () => {
      const totalCostAfterDiscount = applySalesTaxToTotalCost(1000, 'QC');

      expect(totalCostAfterDiscount).toEqual(1149.75);
    });

    it('should return total cost of all the items with sales tax applied when province is ontario', () => {
      const totalCostAfterDiscount = applySalesTaxToTotalCost(1000, 'ON');

      expect(totalCostAfterDiscount).toEqual(1130);
    });

    it('should return total cost of all the items with sales tax applied when province is deleware', () => {
      const totalCostAfterDiscount = applySalesTaxToTotalCost(0.34323434, 'DE');

      expect(totalCostAfterDiscount).toEqual(0.34323434);
    });
  });

  describe('Fail to apply sales tax', () => {
    it('should throw an error when province code is not provided', () => {
      const totalCostAfterDiscount = () => applySalesTaxToTotalCost(1000);

      expect(totalCostAfterDiscount).toThrowError(
        'Please provide the province code.'
      );
    });

    it('should throw an error when province code is provided but doesnt exist in the system', () => {
      const totalCostAfterDiscount = () =>
        applySalesTaxToTotalCost(1000, 'abs');

      expect(totalCostAfterDiscount).toThrowError('Province doesn`t exist.');
    });

    it('should throw an error when total cost is null', () => {
      const totalCostAfterDiscount = () => applySalesTaxToTotalCost(null, 'ON');

      expect(totalCostAfterDiscount).toThrowError(
        'Please enter total cost of the items.'
      );
    });

    it('should throw an error when total cost is type is not number', () => {
      const totalCostAfterDiscount = () =>
        applySalesTaxToTotalCost('items', 'ON');

      expect(totalCostAfterDiscount).toThrowError(
        'Please enter valid type of total cost.'
      );
    });

    it('should throw an error when total cost is number but of type string', () => {
      const totalCostAfterDiscount = () =>
        applySalesTaxToTotalCost('200', 'ON');

      expect(totalCostAfterDiscount).toThrowError(
        'Please enter valid type of total cost.'
      );
    });
  });
});
