// server.js
const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe("sk_test_51QFrT5Ei87u2y4a0YSvQkS7cOh1PtA898nJN0pnSyLZaq2CDqiX0hXkllTcby7OhIFaYThGbBo7BFSoBQzp7RZis0021sNyCfb");
const app = express();

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Premium Subscription",
          },
          unit_amount: 999,
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log("Server is running on port 4242"));
