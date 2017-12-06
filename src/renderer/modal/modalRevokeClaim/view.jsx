import React from "react";
import { Modal } from "modal/modal";
import * as txnTypes from "constants/transaction_types";

class ModalRevokeClaim extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  revokeClaim() {
    const { claimId } = this.props;

    this.props.closeModal();
    this.props.abandonClaim(claimId);
  }

  getButtonLabel(type) {
    if (type == txnTypes.TIP) {
      return "Confirm Tip Unlock";
    } else {
      return "Confirm Claim Revoke";
    }
  }

  getMsgBody(type) {
    if (type == txnTypes.TIP) {
      return (
        <div>
          <h3>{__("Confirm Tip Unlock")}</h3>
          <p>
            {__("Are you sure you want to unlock these credits?")}
            <br />
            <br />
            {__(
              "These credits are permanently yours and can be\
             unlocked at any time. Unlocking them allows you to\
             spend them, but can hurt the performance of your\
             content in lookups and search results. It is\
             recommended you leave tips locked until you\
             need or want to spend them."
            )}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{__("Confirm Claim Revoke")}</h3>
          <p>
            {__("Are you sure want to revoke this claim?")}
            <br />
            <br />
            {__(
              "This will prevent others from resolving and\
              accessing the content you published. It will return\
              the LBC to your spendable balance, less a small\
              transaction fee."
            )}
          </p>
        </div>
      );
    }
  }

  render() {
    const { transactionItems, claimId, closeModal } = this.props;
    const { type } = transactionItems.find(claim => claim.claim_id == claimId);

    return (
      <Modal
        isOpen={true}
        contentLabel={__("Confirm Claim Revoke")}
        type="confirm"
        confirmButtonLabel={this.getButtonLabel(type)}
        onConfirmed={this.revokeClaim.bind(this)}
        onAborted={closeModal}
      >
        {this.getMsgBody(type)}
      </Modal>
    );
  }
}

export default ModalRevokeClaim;
