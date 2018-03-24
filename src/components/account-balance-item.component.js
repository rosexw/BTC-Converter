import React from 'react';

export function AccountBalanceItem(props) {
  return (
    <tr>
      <td>{ props.currencyLabel }</td>
      <td>{ props.currencyValue }</td>
    </tr>
  );
}
