import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import TimetableIcon from 'mdi-react/TimetableIcon';
import renderIntervalDatePickerField from '@/shared/components/form/date-pickers/IntervalDatePicker';
import renderDatePickerField from '@/shared/components/form/date-pickers/DatePicker';
import renderDateTimePickerField from '@/shared/components/form/date-pickers/DateTimePicker';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';

const DatePickers = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.from_picker.date_picker')}</CardTitle>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Default Date Picker</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="default_date"
                      component={renderDatePickerField}
                    />
                    <FormGroupIcon>
                      <CalendarBlankIcon />
                    </FormGroupIcon>
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Date and Time Picker</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="date_time"
                      component={renderDateTimePickerField}
                    />
                    <FormGroupIcon>
                      <TimetableIcon />
                    </FormGroupIcon>
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Interval Date Picker</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="interval_date"
                      component={renderIntervalDatePickerField}
                    />
                  </FormGroupField>
                </FormGroup>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

DatePickers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DatePickers;
