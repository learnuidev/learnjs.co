// Convo History: https://chat.deepseek.com/a/chat/s/429fd92a-82b7-45a7-962e-d303d2b894f5

// Define supported country codes
type CountryCode = "us-US" | "de-DE" | "uk-GB" | "ca-CA" | "in-IN" | "cn-CN";

// Define the mapping between country codes and currency codes
type CountryToCurrency = {
  "us-US": "USD";
  "de-DE": "EUR";
  "uk-GB": "GBP";
  "ca-CA": "CAD";
  "in-IN": "INR";
  "cn-CN": "CNY";
};

// Define the Money type with a generic parameter
type Money = {
  [K in CountryCode]: {
    amount: number;
    countryCode: K;
    currencyCode: CountryToCurrency[K];
  };
}[CountryCode];

export function formatMoney({ amount, countryCode, currencyCode }: Money) {
  // Use Intl.NumberFormat to format the amount based on the country and currency
  const formatter = new Intl.NumberFormat(countryCode, {
    style: "currency",
    currency: currencyCode,
  });

  return formatter.format(amount);
}

formatMoney({
  amount: 1000,
  countryCode: "ca-CA",
  currencyCode: "CAD",
});
