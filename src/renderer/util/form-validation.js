import lbryuri from "lbryuri";

const addressRegex = lbryuri.REGEXP_ADDRESS;

export const validateSendTx = ({ address, amount }) => {
  let errors = {};

  if (address && !addressRegex.test(address)) {
    errors.address = __("Not a valid LBRY address");
  }

  return errors;
}
