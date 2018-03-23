## Scripts to Run
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

----

## Task
Rebuild a modified version of the ‘Currency Pair Trading’ user interface which allows a user to
complete a market trade between US Dollars and Bitcoin
Pull the ` last_price` from the Bitfinex (BFX) public API:
https://docs.bitfinex.com/docs/public-endpoints
Currency pair to use: US dollars ($) to Bitcoin
## Requirements
- Must be made using HTML, CSS, React, and Node.js
- Include a state manager (such as Redux), used as an intermediary while waiting for data
- Match the UI to the following design mockup as closely as possible
- Include some form of testing
- Avoid using frontend libraries such as Bootstrap
## Instructions
- Your account is pre-funded with $156.12 USD. User can trade with any amount
- User can trade any amount up and equal to $156.12 USD
- Fetch the market price of Bitcoin through the public API
- Calculate the quote based on the price of Bitcoin and the USD amount entered by the
user
- Execute the “trade” when the Trade button is clicked and update with the new USD and
BTC account balance
## Considerations
- Organized and understandable code
- Bonus points for coherent and descriptive comments
- The functional UI matches the design as close as possible
