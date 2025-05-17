const apiKey = "4a303640079da5fb5d03017e";

// Fetch live BTN to USD rate
export async function fetchBTNtoUSDRate() {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/BTN/USD`;
  const response = await fetch(url);
  const data = await response.json();
  return data.conversion_rate;
}

// Convert BTN to USD
export function convertBTNtoUSD(btnAmount, rate) {
  if (!btnAmount || isNaN(btnAmount) || !rate) return "0.00";
  return (parseFloat(btnAmount) * rate).toFixed(2);
}
