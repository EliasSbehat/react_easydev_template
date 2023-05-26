import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const DatePicker = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Datepickers</CardTitle>
      </CardTitleWrap>
      <p>DatePickers are based on <a href="https://github.com/Hacker0x01/react-datepicker">react-datepicker</a>.
        The template has three types of datepickers.
      </p>
      <p>1. Simple datepicker</p>
      <CodeHighlither>
        {'import renderDatePickerField from \'@/shared/components/form/date-pickers/DatePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='date'
  component={renderDatePickerField}
/>`}
      </CodeHighlither>
      <p>2. Datepicker with choosing time</p>
      <CodeHighlither>
        {'import renderDateTimePickerField from \'@/shared/components/form/date-pickers/DateTimePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='date_with_time'
  component={renderDateTimePickerField}
/>`}
      </CodeHighlither>
      <p>3. Datepicker with choosing interval</p>
      <CodeHighlither>
        {'import renderIntervalDatePickerField from \'@/shared/components/form/date-pickers/IntervalDatePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='interval_date'
  component={renderIntervalDatePickerField}
/>`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default DatePicker;
