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
type Money<T extends CountryCode> = {
  amount: number;
  countryCode: T;
};

/**
 * Formats a money object into a string representation with localised currency formatting.
 * @template T - The type of the country code, which must be one of the keys in CountryToCurrency.
 * @param {Money<T>} param0 - An object containing an amount and a countryCode.
 * @returns A string representing the money value with localised currency formatting.
 *
 * @example
 * ```typescript
 * const usd100 = {amount: 100, countryCode: "us-US"};
 * console.log(formatMoney(usd100)); // Outputs: $100.00
 *
 * const eur200 = {amount: 200, countryCode: "de-DE"};
 * console.log(formatMoney(eur200)); // Outputs: €200.00
 * ```
 */
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
    countryCode: "cn-CN",
  })
);
