import express, { response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import Razorpay from "razorpay"
import crypto from "crypto"
import { error } from "console"
const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("app is running..")
})

app.post('/api/payment/orders', (req, res) => {
    try {
        const razorpayInstance = new Razorpay({
            key_id: "rzp_test_RTmHbwDXHEbAzB",
            key_secret: "f6G0nPGUbajcpy9iz9h2zNzu",
        })

        const options = {
            amount: req.body.amount * 100,
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex')
        }

        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                res.status(500).send("Order Creation Failed...")
            }
            res.status(200).json({ data: order })
        })
    } catch (error) {
        console.log(error)
        response.status(500).send('Internal Server Error')
    }
})

app.post('/api/payment/verify', (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

        const expectedSign = crypto.createHmac("sha256", "f6G0nPGUbajcpy9iz9h2zNzu") //Secret Key
            .update(razorpay_order_id + '|' + razorpay_payment_id)
            .digest("hex");

        if (expectedSign === razorpay_signature) {
            return res.status(200).send("sucess...")
        } else {
            return res.status(400).send("Failed...")
        }
    }
    catch (error){
        return res.status(500).send("Server Error...")
    }
})

app.listen(8080, () => {
    console.log(error)
    console.log("server started...")
})