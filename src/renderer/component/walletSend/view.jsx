import React from 'react';
import Button from 'component/link';
import { Form, FormRow } from "component/common/form";
import { Formik } from "formik";
import { validateSendTx } from "util/form-validation";
import * as modals from 'constants/modal_types';

class WalletSend extends React.PureComponent {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("sending", values.address, values.amount)
    // const { amount, address, sendToAddress } = this.props;
    // const validSubmit = parseFloat(amount) > 0.0 && address;
    //
    // if (validSubmit) {
    //   sendToAddress();
    // }
  }

  render() {
    return (
      <section className="card card--section">
        <div className="card__title-primary">
          <h2>{__('Send Credits')}</h2>
        </div>
        <div className="card__content">
          <Formik
            initialValues={{
              address: '',
              amount: '',
            }}
            onSubmit={this.handleSubmit}
            validate={validateSendTx}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormRow
                  inline
                  label={__("Amount")}
                  postfix={__("LBC")}
                  error={!!values.amount && touched.amount && errors.amount}
                  render={() => (
                    <input
                      className="input--lbc-amount"
                      type="number"
                      name="amount"
                      min="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount}
                    />
                  )}
                />

                <FormRow
                  inline
                  label={__("Recipient address")}
                  error={!!values.address && touched.address && errors.address}
                  render={() => (
                    <input
                      className="input--address"
                      type="text"
                      name="address"
                      placeholder="bbFxRyXXXXXXXXXXXZD8nE7XTLUxYnddTs"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  )} />
                <div className="card__actions">
                <Button
                  type="submit"
                  icon="Send"
                  label={__('Send')}
                  disabled={
                    !values.address ||
                    !!Object.keys(errors).length ||
                    !(parseFloat(values.amount) > 0.0)
                  } />
                  </div>
              </Form>
            )}
          />
        </div>
      </section>
    );
  }
}

export default WalletSend;
