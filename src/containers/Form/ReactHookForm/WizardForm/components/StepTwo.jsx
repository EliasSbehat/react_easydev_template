import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { SelectField } from '@/shared/components/form/Select';
import {
  FormButtonToolbar,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { marginRight } from '@/utils/directions';
import { WizardFormContainer, WizardTitle } from '@/shared/components/form/WizardFormElements';
import { FormField } from '../../FormHookValidation/components/FormField';
import { StepPropTypes, StepDefaultProps } from './Props';

const StepTwo = ({ onSubmit, previousPage, defaultValues }) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <WizardFormContainer horizontal onSubmit={handleSubmit(onSubmit)}>
      <WizardTitle>What’s your address</WizardTitle>
      <FormGroup>
        <FormGroupLabel>Country</FormGroupLabel>
        <FormGroupField>
          <FormField
            control={control}
            name="country"
            component={SelectField}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            placeholder="Select country"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>City</FormGroupLabel>
        <FormGroupField>
          <FormField
            control={control}
            name="city"
            as="input"
            type="text"
            placeholder="City name"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroupAddress>
        <FormGroupLabel>Address</FormGroupLabel>
        <FormGroupField>
          <FormField
            control={control}
            name="street_name"
            as="input"
            type="text"
            placeholder="Street name"
            defaultValue=""
          />
          <FormField
            name="building"
            as="input"
            control={control}
            type="text"
            placeholder="Building"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroupAddress>
      <FormGroup>
        <FormGroupLabel>ZIP Code</FormGroupLabel>
        <FormGroupField>
          <FormField
            control={control}
            name="zip"
            component="input"
            type="text"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormButtonToolbar>
        <Button variant="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
        <Button variant="primary" type="submit" className="next">Next</Button>
      </FormButtonToolbar>
    </WizardFormContainer>
  );
};

StepTwo.propTypes = StepPropTypes;
StepTwo.defaultProps = StepDefaultProps;

export default StepTwo;

// region STYLES

const FormGroupAddress = styled(FormGroup)`
  
  input:last-child {
    ${marginRight}: 15px;
    width: 70%;
  }
`;

// endregion
