import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import { DatePickerWrap } from './DatePickerElements';

const DateTimePickerField = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePickerWrap>
      <DatePicker
        timeFormat="HH:mm"
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        dropDownMode="select"
        withPortal={isMobileOnly}
      />
    </DatePickerWrap>
  );
};

DateTimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default renderComponentField(DateTimePickerField);
