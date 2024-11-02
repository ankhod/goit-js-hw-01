function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Перевірка коректності роботи функції
console.log(getShippingMessage('Australia', 120, 50)); // Shipping to Ukraine will cost 170 credits
console.log(getShippingMessage('Germany', 80, 20)); // Shipping to USA will cost 100 credits
console.log(getShippingMessage('Sweden', 100, 20)); // Shipping to Japan will cost 120 credits
