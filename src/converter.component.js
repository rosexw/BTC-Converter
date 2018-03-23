import React, {Component} from 'react';

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {

  }

  render() {
    const {results} = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>Account Balance</tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>156.12</td>
            </tr>
            <tr>
              <td>BTC</td>
              <td>0.0000</td>
            </tr>
          </tbody>
        </table>
        <p>Trade</p>
        <input type="text" name="currencyFrom" placeholder="USD"/><br/>
        <input type="text" name="amountFrom" placeholder="Enter your amount"/><br/>
        
        <p>For</p>
        <input type="text" name="currencyTo" placeholder="BTC"/><br/>
        <input type="text" name="amountTo" placeholder = "Display Quote"/><br/>
        <button type="submit">Trade</button>
      </div>
    )
  }
}
