import { CurrencyExchange } from './components/PriceCalculator/PriceInterface';


export const formatCurrency = function formatCurrency(amount: number, currencyCode?: string): string {
  if (!currencyCode) currencyCode = 'USD';
  const formattedString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
  return formattedString;
}



export const GetFiatAmount = function({CurrencyAmount, CryptoAmount} : CurrencyExchange) {
    // If less than or eq zero return 1 else return original amount
    CryptoAmount = CryptoAmount <= 0 ? 1 : CryptoAmount
    return Math.abs (Math.floor((CryptoAmount * CurrencyAmount))) 
}

export const StringToNumber = function(input: string): number {
    const output = parseFloat(input)
    return isNaN(output) ? 0 : output;

}