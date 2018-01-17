import React from 'react';
import { BusyMessage } from 'component/common';
import Link from 'component/link';
import TransactionList from 'component/transactionList';
import * as icons from 'constants/icons';

class TransactionListRecent extends React.PureComponent {
  componentWillMount() {
    this.props.fetchTransactions();
  }

  render() {
    const { fetchingTransactions, hasTransactions, transactions } = this.props;

    return (
      <section className="card card--section">
        <h2>{__('Recent Transactions')}</h2>
        <div className="card__content">
          {fetchingTransactions && <BusyMessage message={__('Loading transactions')} />}
          {!fetchingTransactions && (
            <TransactionList
              transactions={transactions}
              emptyMessage={__('You have no recent transactions.')}
            />
          )}
        </div>
        {hasTransactions && (
          <div className="card__actions">
            <Link
              navigate="/history"
              label={__('Full History')}
              icon="Clock"
            />
          </div>
        )}
      </section>
    );
  }
}

export default TransactionListRecent;
