import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { emailPatter, urlPattern } from '@/shared/helpers';
import showResults from '@/utils/showResults';
import PasswordField from '@/shared/components/form/Password';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { FormField } from './FormField';

const Form = ({ isHorizontal, isAboveError }) => {
  const { t } = useTranslation('common');
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = data => showResults(data);

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.from_validation.horizontal_form_validate')}</CardTitle>
            <CardSubhead>
              {isAboveError ? (
                <span>Errors are above fields, use prop <span className="red-text">top</span></span>
              ) : 'Errors are under fields'}
            </CardSubhead>
          </CardTitleWrap>
          <FormContainer horizontal={isHorizontal} onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormGroupLabel>Username</FormGroupLabel>
              <FormGroupField>
                <FormField
                  name="username"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Name"
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>E-mail</FormGroupLabel>
              <FormGroupField>
                <FormField
                  name="email"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: 'This is required field',
                    pattern: {
                      value: emailPatter,
                      message: 'Entered value does not match email format',
                    },
                  }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="example@gmail.com"
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Url</FormGroupLabel>
              <FormGroupField>
                <FormField
                  name="url"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: 'This is required field',
                    pattern: {
                      value: urlPattern,
                      message: 'invalid url',
                    },
                  }}
                  placeholder="https://themeforest.com"
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Password</FormGroupLabel>
              <FormGroupField>
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <PasswordField
                      input={field}
                      meta={{ touched: !!fieldState.error, error: fieldState.error?.message }}
                      placeholder="Password"
                      isAboveError={isAboveError}
                    />
                  )}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Select Option</FormGroupLabel>
              <FormGroupField>
                <FormField
                  name="select"
                  control={control}
                  component={SelectField}
                  errors={errors}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </FormGroupField>
            </FormGroup>
            <FormButtonToolbar>
              <Button variant="primary" type="submit">Validate</Button>
              <Button
                variant="secondary"
                type="button"
                onClick={() => reset({
                  username: '',
                  email: '',
                  url: '',
                  password: '',
                  select: '',
                })}
              >
                Cancel
              </Button>
            </FormButtonToolbar>
          </FormContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
  isAboveError: false,
};

export default Form;
