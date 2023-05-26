import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
} from 'react-bootstrap';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import MicrosoftOfficeIcon from 'mdi-react/MicrosoftOfficeIcon';
import LogInForm from './loginForm/LogInForm';
import { AccountSocialButtonFacebook, AccountSocialButtonGoogle, AccountSocialButtonOffice } from './AccountElements';

const ModalLoginForm = ({
  title, isOpen, error, closeModal, onLogin, onFacebookLogin, onGoogleLogin, onMicrosoftLogin,
}) => (
  <Modal onHide={closeModal} className="light ltr-support" show={isOpen}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Body>
      <LogInForm
        onSubmit={onLogin}
        errorMessage={error}
        form="modal_login"
        fieldUser="E-mail"
        typeFieldUser="email"
      />
      <div className="account__or">
        <p>Or Easily Using</p>
      </div>
      <div className="account__social">
        <AccountSocialButtonFacebook
          type="button"
          onClick={onFacebookLogin}
        >
          <FacebookIcon />
        </AccountSocialButtonFacebook>
        <AccountSocialButtonGoogle
          type="button"
          onClick={onGoogleLogin}
        >
          <GooglePlusIcon />
        </AccountSocialButtonGoogle>

        <AccountSocialButtonOffice
          type="button"
          onClick={onMicrosoftLogin}
        >
          <MicrosoftOfficeIcon />
        </AccountSocialButtonOffice>
      </div>
    </Modal.Body>
  </Modal>
);

ModalLoginForm.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func,
  onGoogleLogin: PropTypes.func,
  onMicrosoftLogin: PropTypes.func,
};

ModalLoginForm.defaultProps = {
  title: '',
  error: '',
  isOpen: false,
  onFacebookLogin: () => {},
  onGoogleLogin: () => {},
  onMicrosoftLogin: () => {},
};

export default ModalLoginForm;
