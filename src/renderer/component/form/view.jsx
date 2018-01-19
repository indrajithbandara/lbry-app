import React from "react";

class Form extends React.PureComponent {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { openModal, modalConfirmation, onSubmit } = this.props;
    if (modalConfirmation) {
      openModal(modalConfirmation, { onConfirm: onSubmit });
    }
  }

  render() {
    const { children, onSubmit } = this.props;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.handleSubmit(event)}
        }>
          {children}
      </form>
    );
  }
}

export default Form;
