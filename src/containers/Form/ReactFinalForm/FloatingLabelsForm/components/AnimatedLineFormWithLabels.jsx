import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import {
  MaterialFormContainer,
  MaterialFormOption,
  MaterialTextField,
} from '@/shared/components/form/MaterialFormElements';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const renderTextField = ({
  input, label, meta: { touched, error }, children, select, multiline,
}) => (
  <MaterialTextField
    label={label}
    type={input.type}
    error={touched && error}
    value={input.value}
    select={select}
    multiline={multiline}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  >
    {children}
  </MaterialTextField>
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.node,
  multiline: PropTypes.bool,
};

renderTextField.defaultProps = {
  meta: null,
  select: false,
  children: [],
  multiline: false,
};

const AnimatedLineFormWithLabels = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.floating_labels_form.animated_line_inputs')}</CardTitle>
            <CardSubhead>Material fields with a property <span className="red-text">label</span></CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <MaterialFormContainer onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="username"
                    component={renderTextField}
                    placeholder="Name"
                    label="Username"
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    component={renderTextField}
                    placeholder="example@mail.com"
                    type="email"
                    label="Email"
                  />
                </div>
                <div>
                  <Field
                    name="url"
                    component={renderTextField}
                    placeholder="https://themeforest.net"
                    label="URL"
                    type="url"
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    component={renderTextField}
                    type="password"
                    label="Password"
                  />
                </div>
                <div>
                  <Field
                    name="select"
                    component={renderTextField}
                    select
                    label="Select Option"
                  >
                    <MaterialFormOption value="one">One</MaterialFormOption>
                    <MaterialFormOption value="two">Two</MaterialFormOption>
                  </Field>
                </div>
                <div>
                  <Field
                    name="textarea"
                    component={renderTextField}
                    placeholder="Type message here"
                    multiline
                    rowsMax="4"
                    label="Text Area"
                  />
                </div>
                <ButtonToolbar>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="button" onClick={form.reset}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </MaterialFormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

AnimatedLineFormWithLabels.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AnimatedLineFormWithLabels;
