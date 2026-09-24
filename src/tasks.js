// AFTER: Clear names, constant declarations, input validation, and secure handling
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// API keys must be retrieved from environment variables, never hardcoded:
// const apiKey = process.env.API_KEY;

module.exports = { calculateTotal };