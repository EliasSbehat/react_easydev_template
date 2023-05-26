import React from 'react';
import { ToggleButtonField } from '@/shared/components/form/ToggleButton';
import { SelectField } from '@/shared/components/form/Select';
import { useForm } from 'react-hook-form';
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
import { FormField } from '../../FormHookValidation/components/FormField';
import { StepPropTypes, StepDefaultProps } from './Props';

const StepThree = ({ onSubmit, previousPage, defaultValues }) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  return (
    <WizardFormContainer horizontal onSubmit={handleSubmit(onSubmit)}>
      <WizardTitle>Set the preferences</WizardTitle>
      <FormGroup>
        <FormGroupLabel>Change Plan</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="plan"
            control={control}
            component={SelectField}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            placeholder="Choose plan"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>E-Mail Notifications</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="email_notifications"
            control={control}
            component={ToggleButtonField}
            defaultValue
          />
        </FormGroupField>
        <WizardDescription>
          Agreement offending commanded my an. Change wholly say why eldest period.
        </WizardDescription>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>Phone Notifications</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="phone_notifications"
            control={control}
            component={ToggleButtonField}
            defaultValue=""
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
  );
};

StepThree.propTypes = StepPropTypes;
StepThree.defaultProps = StepDefaultProps;

export default StepThree;
