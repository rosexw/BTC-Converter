BTC Converter is a modified version of the 'Currency Pair Trading' user interface, which allows a user to complete a market trade between US Dollars and Bitcoin. It's made using HTML, CSS, React, Redux, and Node.js. It includes testing.

It pulls the ` last_price` from the Bitfinex (BFX) public API: https://docs.bitfinex.com/docs/public-endpoints and converts US dollars ($) to Bitcoin currency. 

Example: 
- Your account is pre-funded with $156.12 USD. User can trade with any amount
- User can trade any amount up and equal to $156.12 USD
- Fetch the market price of Bitcoin through the public API
- Calculate the quote based on the price of Bitcoin and the USD amount entered by the
user
- Execute the “trade” when the Trade button is clicked and update with the new USD and
BTC account balance

----

App is now deployed, please check it out here: https://rosexw.github.io/BTC-Converter/

[Screenshot of App](screenshot.png)

To run the program, enter in `npm start` to your terminal. This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
