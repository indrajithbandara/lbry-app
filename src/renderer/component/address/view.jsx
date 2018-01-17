import React from 'react';
import PropTypes from 'prop-types';
import { clipboard } from 'electron';
import Link from 'component/link';
import classnames from 'classnames';

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
      <div className="form__field">
        <input
          className={classnames('input-copyable', {})}
          type="text"
          ref={input => {
            this._inputElem = input;
          }}
          onFocus={() => {
            this._inputElem.select();
          }}
          readOnly="readonly"
          value={address || ''}
        />
        <Link
          alt
          icon="Clipboard"
          onClick={() => {
            clipboard.writeText(address);
            doShowSnackBar({ message: __('Address copied') });
          }}
        />
      </div>
    );
  }
}
