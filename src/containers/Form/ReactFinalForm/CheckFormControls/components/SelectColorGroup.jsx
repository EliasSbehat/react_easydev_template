import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import { FormGroupField } from '@/shared/components/form/FormElements';
import styled from 'styled-components';
import { formGroup } from './CheckFormControlsData';

const SelectColorGroup = ({ name }) => (
  <div>
    <p>Select color</p>
    <SelectColorsWrap>
      {formGroup.map(item => (
        <FormGroupField key={`index_${item.color}`}>
          <Field
            name={`${item.color}_${name}`}
            type="checkbox"
            component={renderCheckBoxField}
            initialValue={item.defaultChecked}
            color={item.color}
            className="colored"
          />
        </FormGroupField>
      ))}
    </SelectColorsWrap>
  </div>
);

SelectColorGroup.propTypes = {
  name: PropTypes.string,
};

SelectColorGroup.defaultProps = {
  name: '',
};

export default SelectColorGroup;

// region STYLES

const SelectColorsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 84px;
  margin-right: 40px;
  
  & > div {
    width: auto;
    
    label {
      display: block;
    }
  }
`;

// endregion
