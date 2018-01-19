import React from 'react';
import Link from 'component/link';
import RewardSummary from 'component/rewardSummary';
import ShapeShift from 'component/shapeShift';
import Page from 'component/page';

const GetCreditsPage = props => (
  <Page>
    <RewardSummary />
    <ShapeShift />
    <section className="card card--section">
      <h2>{__('From External Wallet')}</h2>
      <div className="card__actions">
        <Link button="alt" navigate="/send" icon="icon-send" label={__('Send / Receive')} />
      </div>
    </section>
    <section className="card card--section">
      <h2>{__('More ways to get LBRY Credits')}</h2>
      <div className="card__content">
        <p>
          {
            'LBRY credits can be purchased on exchanges, earned for contributions, for mining, and more.'
          }
        </p>
      </div>
      <div className="card__actions">
        <Link fakeLink href="https://lbry.io/faq/earn-credits" label={__('Read More')} />
      </div>
    </section>
  </Page>
);

export default GetCreditsPage;
