/* Create Express Router */
import express from 'express'
const router = express.Router()

import userModule from './modules/user'
router.use('/users', userModule)

import categoryModule from './modules/category';
router.use('/categories', categoryModule);

import productModule from './modules/product';
router.use('/products', productModule);

import purchaseModule from './modules/purchase.api';
router.use('/purchase', purchaseModule);

import receiptModule from './modules/receipt.api';
router.use('/receipts', receiptModule);

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// router.get('/admin', (req, res) => {
//     let categories = prisma.categories.createMany({
//         data: [
//             { title: 'RINGS', status: 1, avatar: 'rings.jpg', deleted: 0 },
//             { title: 'NECKLACES', status: 0, avatar: 'necklaces.jpg', deleted: 0 },
//             { title: 'WATCHES', status: 1, avatar: 'watches.jpg', deleted: 0 },
//             { title: 'BAGS', status: 1, avatar: 'bags.jpg', deleted: 0 }
//         ]
//     })

//     let products = prisma.products.createMany({
//         data: [
//             { title: 'RINGS', status: 1, avatar: 'rings.jpg', deleted: 0 },
//             { title: 'NECKLACES', status: 0, avatar: 'necklaces.jpg', deleted: 0 },
//             { title: 'WATCHES', status: 1, avatar: 'watches.jpg', deleted: 0 },
//             { title: 'BAGS', status: 1, avatar: 'bags.jpg', deleted: 0 }
//         ]
//     })
// });
export default router;