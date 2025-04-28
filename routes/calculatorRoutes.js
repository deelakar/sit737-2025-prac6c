const express = require("express");

const calculatorController = require("../controllers/calculatorController");

const router = express.Router();

router.post("/add", calculatorController.add);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
router.post("/divide", calculatorController.divide);

router.post("/exponent", calculatorController.exponent);
router.post("/sqrt", calculatorController.squareRoot);
router.post("/modulo", calculatorController.modulo);

module.exports = router;
