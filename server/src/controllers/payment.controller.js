import Razorpay from 'razorpay'
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from '../utils/ApiResponse.js';

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

export const processPayment = asyncHandler(async (req, res) => {
    const amount = req.body.amount;
    const options = {
        amount : Number(100 * amount),
        currency : "INR",
        // receipt : "receipt#1",
    }

    const order = await razorpayInstance.orders.create(options);

    return res.
    status(200).
    json(
        new ApiResponse(
            200,
            order,
            "Payment processed successfully"
        )
    )
})

export const getKey = asyncHandler(async (req, res) => {
    return res.
    status(200).
    json(
        new ApiResponse(
            200,
            {
                key_id: process.env.RAZORPAY_KEY_ID
            },
            "Razorpay key fetched successfully"
        )
    )
})