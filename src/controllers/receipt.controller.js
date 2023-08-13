import receiptModel from '../models/receipt.model';
export default {
    findReceipt: async function (req, res) {
        try {
            let modelRes = await receiptModel.findReceipt(Number(req.params.user_id));
            return res.status(modelRes.status ? 200 : 213).json(modelRes)
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi controller!"
            })
        }
    },
    findMany: async function (req, res) {
        try {
            let modelRes = await receiptModel.findMany();
            return res.status(modelRes.status ? 200 : 213).json(modelRes)
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi controller!"
            })
        }
    },
    update: async function (req, res) {
        try {
            let modelRes = await receiptModel.update(Number(req.params.receiptId), req.body);
            return res.status(modelRes.status ? 200 : 213).json(modelRes)
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi controller!"
            })
        }
    }
}