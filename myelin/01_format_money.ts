type Money = {
  amount: number;
  countryCode: string;
  currencyCode: string;
};

export function formatMoney({ amount, countryCode, currencyCode }: Money) {
  // Use Intl.NumberFormat to format the amount based on the country and currency
  const formatter = new Intl.NumberFormat(countryCode, {
    style: "currency",
    currency: currencyCode,
  });

  return formatter.format(amount);
}
