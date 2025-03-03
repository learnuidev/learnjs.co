// Convo History: https://chat.deepseek.com/a/chat/s/429fd92a-82b7-45a7-962e-d303d2b894f5

// Step 1: Define the CountryToCurrency Mapping
const CountryToCurrency = {
  "us-US": "USD",
  "de-DE": "EUR",
  "uk-GB": "GBP",
  "ca-CA": "CAD",
  "in-IN": "INR",
  "cn-CN": "CNY",
  "jp-JP": "JPY",
  "kr-KR": "KRW",
} as const;

// Steo 2: Infer CountryCode and CurrencyCode from CountryToCurrency
type CountryCode = keyof typeof CountryToCurrency;

// Step 3: Define the Money type.
// Money type is generic, and the currencyCode is strictly tied to the countryCode.
type Money<T extends CountryCode = CountryCode> = {
  amount: number;
  countryCode: T;
};

function formatMoney<T extends CountryCode>({
  amount,
  countryCode,
}: Money<T>): string {
  const currencyCode = CountryToCurrency[countryCode];

  const formatter = new Intl.NumberFormat(countryCode, {
    style: "currency",
    currency: currencyCode,
  });

  return formatter.format(amount);
}

console.log(
  formatMoney({
    amount: 1000,
    countryCode: "in-IN",
  })
);
