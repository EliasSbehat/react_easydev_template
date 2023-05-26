import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import { FormGroupField } from '@/shared/components/form/FormElements';
import { radioButtonsGroup } from './CheckFormControlsData';

const RadioButtonGroup = ({ name, styleType }) => (
  <div>
    {radioButtonsGroup.map(item => (
      <FormGroupField key={`index_${item.label}`}>
        <Field
          name={`${item.name}_${name}`}
          component={renderRadioButtonField}
          label={item.label}
          radioValue={item.radioValue}
          initialValue={item.initialValue}
          disabled={item.disabled}
          styleType={styleType}
        />
      </FormGroupField>
    ))}
  </div>
);

RadioButtonGroup.propTypes = {
  name: PropTypes.string,
  styleType: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  name: '',
  styleType: '',
};

export default RadioButtonGroup;
