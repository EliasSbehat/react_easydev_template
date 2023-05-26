import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PasswordField from '@/shared/components/form/Password';
import {
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { WizardButtonToolbar, WizardFormContainer, WizardTitle } from '@/shared/components/form/WizardFormElements';
import { FormField } from '../../FormHookValidation/components/FormField';
import { StepPropTypes, StepDefaultProps } from './Props';

const StepOne = ({ onSubmit, defaultValues }) => {
  const { handleSubmit, control } = useForm({ defaultValues });
  return (
    <WizardFormContainer horizontal onSubmit={handleSubmit(onSubmit)}>
      <WizardTitle>Fill your personal data</WizardTitle>
      <FormGroup>
        <FormGroupLabel>Username</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="username"
            as="input"
            placeholder="Name"
            control={control}
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>E-mail</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="email"
            as="input"
            type="email"
            placeholder="example@mail.com"
            control={control}
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>Url</FormGroupLabel>
        <FormGroupField>
          <FormField
            name="url"
            as="input"
            control={control}
            type="url"
            placeholder="https://themeforest.net"
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>Password</FormGroupLabel>
        <FormGroupField>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => <PasswordField input={field} placeholder="Password" />}
          />
        </FormGroupField>
      </FormGroup>
      <WizardButtonToolbar>
        <Button variant="primary" type="button" disabled className="previous">Back</Button>
        <Button variant="primary" type="submit" className="next">Next</Button>
      </WizardButtonToolbar>
    </WizardFormContainer>
  );
};

StepOne.propTypes = StepPropTypes;
StepOne.defaultProps = StepDefaultProps;

export default StepOne;
