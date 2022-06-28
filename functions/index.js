const functions = require("firebase-functions");
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LFAhASDcbdXG3Cewsmtlh3OEQzwnSDfAG9TyS3rDqQPWq93KTHNV07euyCUVLjkaE4XA44x41HY8AhjUGMvEFFm00pk1af4L7"
);

//API
//Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/payment/create?", async (req, res) => {
  const total = req.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);
