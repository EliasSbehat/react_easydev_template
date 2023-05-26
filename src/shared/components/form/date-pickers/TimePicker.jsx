import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimePicker from 'rc-time-picker';
import AvTimerIcon from 'mdi-react/AvTimerIcon';
import { renderComponentField } from '@/shared/components/form/FormField';
import { FormGroupField, FormFieldButton } from '@/shared/components/form/FormElements';

const TimePickerField = ({
  name, onChange, timeMode, theme,
}) => {
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <FormGroupField>
      <TimePicker
        open={opened}
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        name={name}
        onChange={onChange}
        showSecond={false}
        popupClassName={theme === 'dark' ? 'dark' : 'light'}
        use12Hours={timeMode}
      />
      <FormFieldButton
        active={opened}
        type="button"
        onClick={() => {
          toggleOpen();
        }}
      >
        <AvTimerIcon />
      </FormFieldButton>
    </FormGroupField>
  );
};

TimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
  timeMode: PropTypes.bool,
};

TimePickerField.defaultProps = {
  theme: 'light',
  timeMode: false,
};

export default renderComponentField(TimePickerField);
