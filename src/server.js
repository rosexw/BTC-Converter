export function fetchPrice(symbol) {
  return fetch(`https://api.bitfinex.com/v2/ticker/t${symbol}`)
    .then(response => response.json())
    .then(data => data[6]); // 6th array element is last price, from API docs
}
