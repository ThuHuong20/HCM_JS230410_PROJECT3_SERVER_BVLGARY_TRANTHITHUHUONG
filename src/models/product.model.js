import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    findById: async function (id) {
        console.log("id nekk", id)
        try {
            let product = await prisma.products.findUnique({
                where: {
                    id: id
                }
            });
            return {
                message: "Get products success!",
                data: product
            }
        } catch (err) {
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
        }
    },
    //search
    findMany: async function () {
        try {
            let products = await prisma.products.findMany();
            return {
                status: true,
                message: "san pham duoc tim thay!",
                data: products
            }
        } catch (err) {
            return {
                status: false,
                message: "lỗi!"
            }
        }
    },
    searchByName: async function (searchString) {
        try {
            let products = await prisma.products.findMany({
                where: {
                    name: {
                        contains: searchString,
                    }
                }
            });
            return {
                status: true,
                message: "Ket qua search",
                data: products
            }
        } catch (err) {
            return {
                status: false,
                message: "lỗi!"
            }
        }
    },
    //admin
    create: async function (newProduct) {
        try {
            const product = await prisma.products.create({
                data: newProduct
            })
            return {
                status: true,
                message: "Thêm sản phẩm thành công!",
                data: product
            }
        } catch (err) {
            console.log("err", err);
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
        }
    },

    update: async function (productId, data) {
        try {
            const product = await prisma.products.update({
                where: {
                    id: productId
                },
                data: {
                    ...data
                }
            })
            return {
                status: true,
                message: "Update sản phẩm thành công!",
                data: product
            }
        } catch (err) {
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
        }
    },
}

