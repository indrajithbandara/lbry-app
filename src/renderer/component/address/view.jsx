import React from 'react';
import PropTypes from 'prop-types';
import { clipboard } from 'electron';
import { FormRow } from 'component/common/form';
import Link from 'component/link';

export default class Address extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this._inputElem = null;
  }

  render() {
    const { address, doShowSnackBar } = this.props;

    return (
      <FormRow
        render={() => (
          <React.Fragment>
            <input
              className="input-copyable"
              type="text"
              readOnly="readonly"
              value={address || ''}
              ref={input => {
                this._inputElem = input;
              }}
              onFocus={() => {
                this._inputElem.select();
              }}
            />
            <Link
              alt
              icon="Clipboard"
              onClick={() => {
                clipboard.writeText(address);
                doShowSnackBar({ message: __('Address copied') });
              }}
            />
          </React.Fragment>
        )}
      />
    );
  }
}
