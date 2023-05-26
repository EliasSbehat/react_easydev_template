import React from 'react';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { FormContainer } from '@/shared/components/form/FormElements';
import DatepickerField from './DatepickerField';

const DefaultDatepicker = () => (
  <Col xs={12} md={12} lg={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Default datepicker</CardTitle>
          <CardSubhead>Use default datepicker</CardSubhead>
        </CardTitleWrap>
        <FormContainer>
          <DatepickerField
            name="Default"
            dateFormat="MM/dd/yyyy"
          />
          <DatepickerField
            name="With time select"
            dateFormat="MM/dd/yyyy:HH:mm"
            showTimeSelect
          />

          <DatepickerField
            name="With time input"
            dateFormat="MM/dd/yyyy:HH:mm"
            showTimeInput
          />
          <DatepickerField
            name="Clearable datepicker"
            isClearable
            dateFormat="MM/dd/yyyy"
          />
          <DatepickerField
            name="Disabled"
            disabled
          />
          <DatepickerField
            name="Month Picker"
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </FormContainer>
      </CardBody>
    </Card>
  </Col>
);


export default DefaultDatepicker;
