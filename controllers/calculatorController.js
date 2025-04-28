const logger = require("../utils/logger");

exports.add = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  try {
    const result = num1 + num2;
    logger.info(`Addition successful: ${num1} + ${num2} = ${result}`);
    res.json({ success: true, message: "Addition successful", result });
  } catch (error) {
    logger.error(`Error in add operation: ${error.message}`);
    res
      .status(500)
      .json({ success: false, error: "Calculator service unavailable" });
  }
};

exports.subtract = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  try {
    const result = num1 - num2;
    logger.info(`Subtraction successful: ${num1} - ${num2} = ${result}`);
    res.json({ success: true, message: "Subtraction successful", result });
  } catch (error) {
    logger.error(`Error in subtract operation: ${error.message}`);
    res
      .status(500)
      .json({ success: false, error: "Calculator service unavailable" });
  }
};

exports.multiply = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  try {
    const result = num1 * num2;
    logger.info(`Multiplication successful: ${num1} * ${num2} = ${result}`);
    res.json({ success: true, message: "Multiplication successful", result });
  } catch (error) {
    logger.error(`Error in multiply operation: ${error.message}`);
    res.status(500).json({ error: "Calculator service unavailable" });
  }
};

exports.divide = (req, res) => {
  const { num1, num2 } = req.body;

  const { valid, error } = validateInputs(req);

  if (!valid) {
    logger.warn(error);
    return res.status(400).json({ success: false, error });
  }

  if (num2 === 0) {
    logger.warn(`Division by zero attempt: ${num1} / ${num2}`);
    return res.status(400).json({
      success: false,
      error: "Cannot divide by zero",
    });
  }

  try {
    const result = num1 / num2;
    logger.info(`Division successful: ${num1} / ${num2} = ${result}`);
    res.json({ success: true, message: "Division successful", result });
  } catch (error) {
    logger.error(`Error in divide operation: ${error.message}`);
    res
      .status(500)
      .json({ success: false, error: "Calculator service unavailable" });
  }
};

exports.exponent = (req, res) => {
  const { base, exponent } = req.body;
  if (typeof base !== "number" || typeof exponent !== "number") {
    logger.error("Invalid input: Base and exponent must be numbers");
    return res.status(400).json({ error: "Base and exponent must be numbers" });
  }
  const result = Math.pow(base, exponent);
  logger.info(`Exponent successful: ${base}^${exponent} = ${result}`);
  res.json({ success: true, message: "Exponent successful", result });
};

exports.squareRoot = (req, res) => {
  const { number } = req.body;
  if (typeof number !== "number" || number < 0) {
    logger.error("Invalid input: Input must be a non-negative number");
    return res.status(400).json({ error: "Input must be a non-negative number" });
  }
  const result = Math.sqrt(number);
  logger.info(`Square root successful: sqrt(${number}) = ${result}`);
  res.json({ success: true, message: "Square root successful", result });
};

exports.modulo = (req, res) => {
  const { dividend, divisor } = req.body;
  if (typeof dividend !== "number" || typeof divisor !== "number") {
    logger.error("Invalid input: Both dividend and divisor must be numbers");
    return res.status(400).json({ error: "Both dividend and divisor must be numbers" });
  }
  if (divisor === 0) {
    logger.error("Invalid input: Divisor cannot be zero");
    return res.status(400).json({ error: "Divisor cannot be zero" });
  }
  const result = dividend % divisor;
  logger.info(`Modulo successful: ${dividend} % ${divisor} = ${result}`);
  res.json({ success: true, message: "Modulo successful", result });
};


function validateInputs(req) {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return {
      valid: false,
      error: "Missing parameters: num1 and num2 are required",
    };
  }

  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    return {
      valid: false,
      error: "Invalid input: num1 and num2 must be valid numbers",
    };
  }

  return { valid: true };
}

function isValidNumber(value) {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
}
