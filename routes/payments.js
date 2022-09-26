const express = require("express");
const router = express.Router();
const { orders, verify } = require("../controllers/paymentControllers");

router.post("/orders",orders)
router.post("/verify",verify)

module.exports = router;