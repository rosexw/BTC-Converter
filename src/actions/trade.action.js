export function executeTrade(amountSell, currencySell = "USD", currencyBuy = "BTC") {
  return {
    type: "EXECUTE_TRADE",
    amountSell,
    currencySell,
    currencyBuy
  }
}

export function setTradeAmount(amountSell) {
  return {
    type: "SET_TRADE_AMOUNT",
    amountSell
  }
}
