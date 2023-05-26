import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerField from '@/shared/components/form/date-pickers/DatePicker';

const DatepickerField = ({ name, ...props }) => {
  const [startDate, setStartDate] = useState(new Date());
  const onDateChange = date => setStartDate(date);

  return (
    <DatePickerWrap>
      {name && <p>{name}</p>}
      <DatePickerField
        selected={startDate}
        onChange={onDateChange}
        defaultValue={new Date()}
        {...props}
      />
    </DatePickerWrap>
  );
};

DatepickerField.propTypes = {
  name: PropTypes.string,
};

DatepickerField.defaultProps = {
  name: null,
};

export default DatepickerField;

// region STYLES

const DatePickerWrap = styled.div`
  margin-right: 20px;
`;

// endregion
