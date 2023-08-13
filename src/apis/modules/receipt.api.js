import express from 'express'
const router = express.Router()

import receiptController from '../../controllers/receipt.controller';

router.get('/:user_id', receiptController.findReceipt)
router.get('/', receiptController.findMany)
router.patch('/:receiptId', receiptController.update)
export default router;