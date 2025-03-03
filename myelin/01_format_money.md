# Problem Statement: International Currency Formatter

## Description:

You are tasked with implementing a function that formats a given amount of money into a locale-specific currency format. The function should use the Intl.NumberFormat API to ensure proper internationalization. The function should be type-safe, ensuring that the currency code is strictly tied to the country code.

## Requirements:

### 1. Country-to-Currency Mapping:

- Define a mapping CountryToCurrency that associates country codes (e.g., "us-US", "de-DE") with their respective currency codes (e.g., "USD", "EUR").

### 2. Type Definitions:

- Define a type CountryCode that represents the keys of the CountryToCurrency mapping.
- Define a generic type Money<T extends CountryCode> that represents an amount of money in a specific currency. The type should include:
  - amount: A number representing the amount of money.
  - countryCode: A country code that determines the currency.

### 3. Function Implementation:

- Implement a function formatMoney that takes a Money object and returns a formatted string representing the amount in the appropriate currency format.
- The function should use the Intl.NumberFormat API to format the amount according to the locale and currency specified by the countryCode.

Example Usage:

```ts
const usdMoney: Money<"us-US"> = { amount: 100, countryCode: "us-US" };
console.log(formatMoney(usdMoney)); // Outputs: $100.00

const eurMoney: Money<"de-DE"> = { amount: 200, countryCode: "de-DE" };
console.log(formatMoney(eurMoney)); // Outputs: 200,00 €
```

### Constraints:

- The CountryToCurrency mapping should be immutable and should not be modified after definition.
- The formatMoney function should be generic and type-safe, ensuring that the countryCode and currencyCode are correctly associated.

### Notes:

- You can assume that the CountryToCurrency mapping will always contain valid country and currency codes.
- The function should handle both positive and negative amounts correctly.
