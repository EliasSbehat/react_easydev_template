import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { FormButtonToolbar } from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import {
  MaterialFormContainer,
  MaterialFormOption,
  MaterialTextField,
  MaterialFormLabel,
} from '@/shared/components/form/MaterialFormElements';

const renderTextField = ({
  input, label, meta: { touched, error }, children, select,
}) => (
  <MaterialTextField
    label={label}
    error={touched && error}
    value={input.value}
    type={input.type}
    select={select}
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
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.node,
};

renderTextField.defaultProps = {
  label: '',
  meta: null,
  select: false,
  children: [],
};

const AnimatedLine = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.material_from.animated_line')}</CardTitle>
            <CardSubhead>Material design fields</CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <MaterialFormContainer onSubmit={handleSubmit}>
                <div>
                  <MaterialFormLabel>Username</MaterialFormLabel>
                  <Field
                    name="username"
                    component={renderTextField}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <MaterialFormLabel>Email</MaterialFormLabel>
                  <Field
                    name="email"
                    component={renderTextField}
                    placeholder="example@mail.com"
                    type="email"
                  />
                </div>
                <div>
                  <MaterialFormLabel>URL</MaterialFormLabel>
                  <Field
                    name="url"
                    component={renderTextField}
                    placeholder="https://themeforest.net"
                    type="url"
                  />
                </div>
                <div>
                  <MaterialFormLabel>Password</MaterialFormLabel>
                  <Field
                    name="password"
                    component={renderTextField}
                    type="password"
                  />
                </div>
                <div>
                  <MaterialFormLabel>Select Option</MaterialFormLabel>
                  <Field
                    name="select"
                    component={renderTextField}
                    select
                  >
                    <MaterialFormOption value="one">One</MaterialFormOption>
                    <MaterialFormOption value="two">Two</MaterialFormOption>
                  </Field>
                </div>
                <div>
                  <MaterialFormLabel>Text Area</MaterialFormLabel>
                  <Field
                    name="textarea"
                    component={renderTextField}
                    placeholder="Type message here"
                    multiline
                    rowsMax="4"
                  />
                </div>
                <FormButtonToolbar>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="button" onClick={form.reset}>
                    Cancel
                  </Button>
                </FormButtonToolbar>
              </MaterialFormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

AnimatedLine.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AnimatedLine;
