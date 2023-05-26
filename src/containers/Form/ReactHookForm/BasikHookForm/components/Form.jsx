import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import { Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { FileInputField } from '@/shared/components/form/FileInput';
import PasswordField from '@/shared/components/form/Password';
import showResults from '@/utils/showResults';
import {
  Card, CardBody,
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

const selectOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

const Form = ({ isHorizontal }) => {
  const {
    handleSubmit,
    register,
    reset,
    control,
  } = useForm();

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <FormContainer horizontal={isHorizontal} onSubmit={handleSubmit(showResults)}>
            <FormGroup>
              <FormGroupLabel>Default Label</FormGroupLabel>
              <FormGroupField>
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Default Input"
                  {...register('defaultInput')}
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Disabled Field</FormGroupLabel>
              <FormGroupField>
                <input
                  name="disableInput"
                  type="text"
                  placeholder="Disabled Input"
                  disabled
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>E-mail</FormGroupLabel>
              <FormGroupField>
                <input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  {...register('email')}
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Password</FormGroupLabel>
              <FormGroupField>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <PasswordField
                      input={field}
                      placeholder="Password"
                    />
                  )}
                  defaultValue=""
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Icon Left</FormGroupLabel>
              <FormGroupField>
                <FormGroupIcon>
                  <EmailIcon />
                </FormGroupIcon>
                <input
                  name="leftIcon"
                  type="email"
                  placeholder="Icon Left Input"
                  {...register('leftIcon')}
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Icon Right</FormGroupLabel>
              <FormGroupField>
                <input
                  name="rightIcon"
                  type="text"
                  {...register('rightIcon')}
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
                <input
                  name="descriptionInput"
                  type="text"
                  {...register('descriptionInput')}
                />
              </FormGroupField>
              <FormGroupDescription>
                Zealously now pronounce existence add you instantly say offending.
              </FormGroupDescription>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Dropdown</FormGroupLabel>
              <FormGroupField>
                <Controller
                  name="select"
                  render={({ field }) => <SelectField {...field} options={selectOptions} />}
                  defaultValue=""
                  control={control}
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Multiselect</FormGroupLabel>
              <FormGroupField>
                <Controller
                  name="multiSelect"
                  control={control}
                  render={({ field }) => (
                    <SelectField 
                      {...field}
                      options={selectOptions}
                      isMulti
                      closeOnSelect={false}
                      removeSelected={false}
                    />
                  )}
                  defaultValue=""
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Textarea</FormGroupLabel>
              <FormGroupField>
                <input
                  name="textarea"
                  type="text"
                  {...register('textarea')}
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>
                Add file
              </FormGroupLabel>
              <FormGroupField>
                <Controller
                  name="file"
                  control={control}
                  render={({ field }) => <FileInputField {...field} />}
                />
              </FormGroupField>
            </FormGroup>
            <FormButtonToolbar>
              <Button variant="primary" type="submit">Submit</Button>
              <Button
                type="button"
                variant="secondary"
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
};

Form.defaultProps = {
  isHorizontal: false,
};

export default Form;
