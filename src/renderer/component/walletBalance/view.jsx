import React from 'react';
import Link from 'component/link';
import CreditAmount from 'component/common/credit-amount';

const WalletBalance = props => {
  const { balance, navigate } = props;
  /*
<div className="help">
          <Link
            onClick={() => navigate("/backup")}
            label={__("Backup Your Wallet")}
          />
        </div>
 */
  return (
    <section className="card card--section">
      <h2>{__('Balance')}</h2>
      <span className="card__subtitle">You currently have</span>
      <div className="card__content">
        {(balance || balance === 0) && <CreditAmount large amount={balance} precision={8} />}
      </div>
    </section>
  );
};
// <div className="card__actions">
// <Link button="alt" navigate="/getcredits" label={__('Get Credits')} />
// <Link
// button="alt"
// disabled={balance === 0}
// navigate="/backup"
// label={__('Backup Wallet')}
// />
// </div>

export default WalletBalance;
