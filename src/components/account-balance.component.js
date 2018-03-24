import React, {Component} from 'react';
import { AccountBalanceItem } from './account-balance-item.component';

export class AccountBalance extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr><td>Account Balance</td></tr>
          </thead>
          <tbody>
            <AccountBalanceItem currencyLabel="USD" currencyValue="$156.12" />
            <AccountBalanceItem currencyLabel="BTC" currencyValue="0.00000" />
          </tbody>
        </table>
      </div>
    )
  }
}
