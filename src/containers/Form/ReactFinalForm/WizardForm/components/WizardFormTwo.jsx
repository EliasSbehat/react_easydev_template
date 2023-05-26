import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import renderSelectField from '@/shared/components/form/Select';
import {
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { marginRight } from '@/utils/directions';
import { WizardButtonToolbar, WizardFormContainer, WizardTitle } from '@/shared/components/form/WizardFormElements';

const WizardFormTwo = ({ onSubmit, previousPage, initialValues }) => (
  <Form onSubmit={onSubmit} initialValues={initialValues}>
    {({ handleSubmit }) => (
      <WizardFormContainer horizontal onSubmit={handleSubmit}>
        <WizardTitle>What’s your address</WizardTitle>
        <FormGroup>
          <FormGroupLabel>Country</FormGroupLabel>
          <FormGroupField>
            <Field
              name="country"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
              placeholder="Select country"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupLabel>City</FormGroupLabel>
          <FormGroupField>
            <Field
              name="city"
              component="input"
              type="text"
              placeholder="City name"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroupAddress>
          <FormGroupLabel>Address</FormGroupLabel>
          <FormGroupField>
            <Field
              name="street_name"
              component="input"
              type="text"
              placeholder="Street name"
            />
            <Field
              name="building"
              component="input"
              type="text"
              placeholder="Building"
            />
          </FormGroupField>
        </FormGroupAddress>
        <FormGroup>
          <FormGroupLabel>ZIP Code</FormGroupLabel>
          <FormGroupField>
            <Field
              name="zip"
              component="input"
              type="text"
            />
          </FormGroupField>
        </FormGroup>
        <WizardButtonToolbar>
          <Button variant="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
          <Button variant="primary" type="submit" className="next">Next</Button>
        </WizardButtonToolbar>
      </WizardFormContainer>
    )}
  </Form>
);

WizardFormTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
};

export default WizardFormTwo;

// region STYLES

const FormGroupAddress = styled(FormGroup)`
  
  input:last-child {
    ${marginRight}: 15px;
    width: 70%;
  }
`;

// endregion
