/**
 * Router for getting total cost of product
 */

import { Router } from 'express';
import asyncMiddleware from '../middlewares/asyncMiddleware';
import getTotalCost from '../services/totalCost';
const router = Router();

/* GET
/totalcost/{numberOfItems}/{pricePerItem}/{provinceCode}:
*/

router.get(
  '/:numberOfItems/:pricePerItem/:provinceCode',
  asyncMiddleware((req, res) => {
    const { numberOfItems, pricePerItem, provinceCode } = req.params;
    const totalCost = getTotalCost(
      parseFloat(numberOfItems),
      parseFloat(pricePerItem),
      provinceCode
    );
    return res.json({ totalCost });
  })
);

export default router;
