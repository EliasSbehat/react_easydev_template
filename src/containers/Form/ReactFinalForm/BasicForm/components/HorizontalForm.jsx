import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import renderFileInputField from '@/shared/components/form/FileInput';
import renderSelectField from '@/shared/components/form/Select';
import PasswordField from '@/shared/components/form/Password';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
  FormGroupDescription,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const HorizontalForm = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.basic_form.horizontal_form')}</CardTitle>
            <CardSubhead>Labels are left from fields</CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <FormContainer horizontal onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Default Label</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="defaultInput"
                      component="input"
                      type="text"
                      placeholder="Default Input"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Disabled Field</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="disableInput"
                      component="input"
                      type="text"
                      placeholder="Disabled Input"
                      disabled
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>E-mail</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="email"
                      component="input"
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Password</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="password"
                      component={PasswordField}
                      placeholder="Password"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Icon Left</FormGroupLabel>
                  <FormGroupField>
                    <FormGroupIcon>
                      <EmailIcon />
                    </FormGroupIcon>
                    <Field
                      name="leftIcon"
                      component="input"
                      type="email"
                      placeholder="Icon Left Input"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Icon Right</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="rightIcon"
                      component="input"
                      type="text"
                      placeholder="Icon Right Input"
                    />
                    <FormGroupIcon>
                      <AccountSearchIcon />
                    </FormGroupIcon>
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Field with description</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="descriptionInput"
                      component="input"
                      type="text"
                    />
                  </FormGroupField>
                  <FormGroupDescription>
                    Zealously now pronounce existence add you instantly say offending.
                  </FormGroupDescription>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Dropdown</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="select"
                      component={renderSelectField}
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Multiselect</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="multiSelect"
                      component={renderSelectField}
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
                      isMulti
                      closeOnSelect={false}
                      removeSelected={false}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Textarea</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="textarea"
                      component="textarea"
                      type="text"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>
                    Add file
                  </FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="file"
                      component={renderFileInputField}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="button" onClick={form.reset}>
                    Cancel
                  </Button>
                </FormButtonToolbar>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

HorizontalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default HorizontalForm;
