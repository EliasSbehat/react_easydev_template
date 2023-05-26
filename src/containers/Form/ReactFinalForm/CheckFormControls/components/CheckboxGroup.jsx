import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import { FormGroupField } from '@/shared/components/form/FormElements';
import { checkboxGroup } from './CheckFormControlsData';

const CheckBoxGroup = ({ name, styleType }) => (
  <div>
    {checkboxGroup.map(item => (
      <FormGroupField key={`index_${item.label}`}>
        <Field
          name={`${item.name}_${name}`}
          type="checkbox"
          component={renderCheckBoxField}
          label={item.label}
          initialValue={item.defaultChecked}
          disabled={item.disabled}
          styleType={styleType}
        />
      </FormGroupField>
    ))}
  </div>
);

CheckBoxGroup.propTypes = {
  name: PropTypes.string,
  styleType: PropTypes.string,
};

CheckBoxGroup.defaultProps = {
  name: '',
  styleType: '',
};

export default CheckBoxGroup;
