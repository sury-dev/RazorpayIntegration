import express, { urlencoded } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({limit : "16kb"}));

app.use(urlencoded({extended: true, limit : "16kb"}));

app.use(express.static("public"));

app.use(cookieParser());

app.use(cors({
    origin : process.env.CORS_ORIGIN,
}))

//routes

import paymentRouter from "./routes/payment.routes.js"

// routes declaration

app.use("/api/pay", paymentRouter);

export { app };