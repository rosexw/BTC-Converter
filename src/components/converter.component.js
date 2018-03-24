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
        <p>Trade</p>
        <input type="text" name="currencyFrom" value="USD"/><br/>
        <input type="text" name="amountFrom" placeholder="Enter your amount" /><br/>

        <p>For</p>
        <input type="text" name="currencyTo" value="BTC"/><br/>
        <input type="text" name="amountTo" placeholder = "Display Quote"/><br/>

        <button type="submit">Trade</button>
      </div>
    )
  }
}
