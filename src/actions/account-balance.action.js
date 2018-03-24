export function executeTrade(amountSell, currencySell = "USD", currencyBuy = "BTC") {
  return {
    type: "EXECUTE_TRADE",
    amountSell,
    currencySell,
    currencyBuy
  }
}
