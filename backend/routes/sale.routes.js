import express from 'express';
import { createSale, updateSale, getAllSales, getSale, deleteSale } from '../controllers/sale.controllers.js';
const router = express.Router();

router.get('/', getAllSales);
router.get('/:id', getSale);
router.post('/', createSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

export default router;