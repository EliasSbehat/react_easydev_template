import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import { DatePickerWrap } from './DatePickerElements';

const DatePickerField = ({ onChange, ...other }) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePickerWrap>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="yyyy/MM/dd"
        dropDownMode="select"
        popperPlacement="center"
        withPortal={isMobileOnly}
        {...other}
      />
    </DatePickerWrap>
  );
};

DatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default renderComponentField(DatePickerField);
