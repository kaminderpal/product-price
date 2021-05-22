/**
 * Router for getting total cost of product
 */

import { Router } from 'express';
import asyncMiddleware from '../middlewares/asyncMiddleware';

const router = Router();

/* GET
/totalcost/{numberOfItems}/{pricePerItem}/{provinceCode}:
 check if 
 /currency/10/EUR/USD
 can be
 /currency?amount=10&from=EUR&to=USD
*/

router.get(
  '/:numberOfItems/:pricePerItem/:provinceCode',
  asyncMiddleware((req, res) => {
    const { numberOfItems, pricePerItem, provinceCode } = req.params;
    const totalCost = getTotalCost(numberOfItems, pricePerItem, provinceCode);
    return res.json({ totalCost });
  })
);

export default router;
