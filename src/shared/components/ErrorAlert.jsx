import React from 'react';
import { PropTypes } from 'prop-types';
import Alert from '@/shared/components/Alert';

const ErrorAlert = ({
  error,
  subTitle,
}) => {
  const wrappedSubTitle = subTitle ? `${subTitle}: ` : '';

  return (error
    ? (
      <Alert color="danger">
        <p><b>Error!{' '}{wrappedSubTitle}</b>{error}</p>
      </Alert>
      )
    : null);
};

ErrorAlert.propTypes = {
  error: PropTypes.string,
  subTitle: PropTypes.string,
};

ErrorAlert.defaultProps = {
  error: null,
  subTitle: '',
};

export default ErrorAlert;
