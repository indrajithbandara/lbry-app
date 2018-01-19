import { connect } from 'react-redux';
import { doOpenModal } from 'redux/actions/app';
import Form from './view';

const select = (state, props) => ({
});

const perform = dispatch => ({
  openModal: (modal, props) => dispatch(doOpenModal(modal, props)),
});

export default connect(select, perform)(Form);
