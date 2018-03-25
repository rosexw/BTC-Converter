import React, {Component} from 'react';
import { AccountBalanceItem } from './account-balance-item.component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  // get account balance from redux state
  return {
    USD: state.trade.USD,
    BTC: state.trade.BTC
  }
}

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr><td>Account Balance</td></tr>
          </thead>
          <tbody>
            <AccountBalanceItem currencyLabel="USD" currencyValue={this.props.USD} />
            <AccountBalanceItem currencyLabel="BTC" currencyValue={this.props.BTC} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(AccountBalance);
