import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderComponentField } from '@/shared/components/form/FormField';
import { colorFieldsBorder, colorText } from '@/utils/palette';
import { paddingLeft } from '@/utils/directions';

export const FileInputField = React.forwardRef(({ onChange, name, value }, ref) => {
  const handleChange = (e) => {
    e.preventDefault();
    const files = [...e.target.files];
    onChange({ file: files[0], name: files[0].name });
  };

  return (
    <FormGroupFile>
      <label htmlFor={name}>Choose the file</label>
      {value && <span>{value.name}</span>}
      <input
        type="file"
        name={name}
        id={name}
        onChange={handleChange}
        ref={ref}
      />
    </FormGroupFile>
  );
});

FileInputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
    }),
    PropTypes.string,
  ]),
};

FileInputField.defaultProps = {
  value: null,
};

export default renderComponentField(FileInputField);


// region STYLES

const FormGroupFile = styled.div`
  
  label {
    border-radius: 2px;
    line-height: 18px;
    font-size: 12px;
    padding: 4px 20px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    border: 1px solid ${colorFieldsBorder};
    color: ${colorText};

    &:hover {
      background: ${colorFieldsBorder};
    }
  }

  span {
    ${paddingLeft}: 10px;
  }

  input {
    display: none;
  }
`;

// endregion
