import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {

    findReceipt: async function (user_id) {
        try {
            let existCart = await prisma.receipts.findMany({
                where: {
                    user_id: user_id
                },
                include: {
                    receipt_details: true,
                    receipt_details: {
                        include: {
                            product: true,
                        }
                    }
                }
            })

            return {
                status: true,
                message: "ok!",
                data: existCart
            }
        } catch (err) {
            console.log("🚀 ~ file: receipt.model.js:28 ~ err:", err)
            return {
                status: false,
                message: "Lỗi model!"
            }
        }
    },
    findMany: async function () {
        try {
            let receipts = await prisma.receipts.findMany({
                include: {
                    user: true,
                    receipt_details: true,
                    receipt_details: {
                        include: {
                            product: true,
                        }
                    }
                }
            })

            return {
                status: true,
                message: "ok!",
                data: receipts
            }
        } catch (err) {
            return {
                status: false,
                message: "Lỗi model!"
            }
        }
    },
    update: async function (receiptId, data) {
        try {
            await prisma.receipts.update({
                where: {
                    id: receiptId
                },
                data: {
                    ...data
                }
            })

            return {
                status: true,
                message: "ok!",
            }
        } catch (err) {
            return {
                status: false,
                message: "Lỗi model!"
            }
        }
    },
}