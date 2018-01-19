import React from "react";
import classnames from "classnames";

export class FormRow extends React.PureComponent {
  render() {
    const { render, label, prefix, postfix, inline, error } = this.props;
    return (
      <div className={classnames("form-row", { "form-row--inline": inline })}>
        {label && <span className="form-row__label">{label}</span>}
        <div className="form-row__field">
          {prefix && <span className="form__prefix">{prefix}</span>}
          {render()}
          {postfix && <span className="form__postfix">{postfix}</span>}
        </div>
        {error && (
          <div className="form-row__error">
            {error}
          </div>
        )}
      </div>
    )
  }
}

export class Form extends React.PureComponent {
  render() {
    const { children, onSubmit } = this.props;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event)}
        }>
          {children}
      </form>
    );
  }
}

export default Form;
