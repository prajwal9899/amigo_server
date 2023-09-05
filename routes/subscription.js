import express from "express";
import User from "../models/subscribedUser.js";
import { stripe } from "../utils/stripe.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/prices", async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.post("/session", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
      customer: user.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

export default router;
