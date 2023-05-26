import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import renderToggleButtonField from '@/shared/components/form/ToggleButton';
import renderSelectField from '@/shared/components/form/Select';
import {
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import {
  WizardButtonToolbar,
  WizardDescription,
  WizardFormContainer,
  WizardTitle,
} from '@/shared/components/form/WizardFormElements';

const WizardFormThree = ({ onSubmit, previousPage, initialValues }) => (
  <Form onSubmit={onSubmit} initialValues={initialValues}>
    {({ handleSubmit }) => (
      <WizardFormContainer horizontal onSubmit={handleSubmit}>
        <WizardTitle>Set the preferences</WizardTitle>
        <FormGroup>
          <FormGroupLabel>Change Plan</FormGroupLabel>
          <FormGroupField>
            <Field
              name="plan"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
              placeholder="Choose plan"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupLabel>E-Mail Notifications</FormGroupLabel>
          <FormGroupField>
            <Field
              name="email_notifications"
              component={renderToggleButtonField}
              initialValue
            />
          </FormGroupField>
          <WizardDescription>
            Agreement offending commanded my an. Change wholly say why eldest period.
          </WizardDescription>
        </FormGroup>
        <FormGroup>
          <FormGroupLabel>Phone Notifications</FormGroupLabel>
          <FormGroupField>
            <Field
              name="phone_notifications"
              component={renderToggleButtonField}
            />
          </FormGroupField>
          <WizardDescription>
            Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or.
          </WizardDescription>
        </FormGroup>
        <WizardButtonToolbar>
          <Button variant="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
          <Button variant="primary" type="submit">Submit</Button>
        </WizardButtonToolbar>
      </WizardFormContainer>
    )}
  </Form>
);

WizardFormThree.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
};

export default WizardFormThree;
