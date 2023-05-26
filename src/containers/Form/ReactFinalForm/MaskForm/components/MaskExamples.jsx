import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import { renderMaskedField } from '@/shared/components/form/FormField';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const maskDate = (dir, sep) => {
  if (dir === 'rtl') {
    return [/\d/, /\d/, /\d/, /\d/, sep, /\d/, /\d/, sep, /\d/, /\d/];
  }
  return [/\d/, /\d/, sep, /\d/, /\d/, sep, /\d/, /\d/, /\d/, /\d/];
};

const autoCorrectedDatePipe = (dir, sep) => {
  const format = dir === 'rtl' ? `yyyy${sep}mm${sep}dd` : `dd${sep}mm${sep}yyyy`;
  return createAutoCorrectedDatePipe(format);
};

const numberMask = createNumberMask({
  prefix: '$ ',
  allowDecimal: true,
  allowLeadingZeroes: true,
});

const ipMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];

const all = /[A-Za-z0-9]/;
const MaskExamples = ({ onSubmit, dir }) => {
  const { t } = useTranslation('common');
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.mask_form.mask_examples')}</CardTitle>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Phone <span>(xxx)-xxx-xxxx</span></FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="phone"
                      component={renderMaskedField}
                      type="text"
                      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      className="phone-input"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Phone with code <span>+23 xxx xx xx</span></FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="phone_code"
                      component={renderMaskedField}
                      type="text"
                      mask={['+', '2', '3', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                      className="phone-input"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Date
                    <span>{`${dir === 'ltr' ? ' dd/mm/yyyy' : ' yyyy/mm/dd'}`}</span>
                  </FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="date"
                      component={renderMaskedField}
                      type="text"
                      mask={maskDate(dir, '/')}
                      pipe={autoCorrectedDatePipe(dir, '/')}
                      keepCharPositions
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Date
                    <span>{`${dir === 'ltr' ? ' dd-mm-yyyy' : ' yyyy-mm-dd'}`}</span>
                  </FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="date_another"
                      component={renderMaskedField}
                      type="text"
                      mask={maskDate(dir, '-')}
                      pipe={autoCorrectedDatePipe(dir, '-')}
                      keepCharPositions
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Currency <span>$xxx,xxx,xxx.xx</span></FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="currency"
                      component={renderMaskedField}
                      type="text"
                      mask={numberMask}
                      guide={false}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Licence key <span>xxxx-xxxx-xxxx-xxxx</span></FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="licence"
                      component={renderMaskedField}
                      type="text"
                      mask={[
                        all, all, all, all, '-', all, all, all, all, '-', all, all, all, all, '-', all, all, all, all,
                      ]}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>IP Address <span>xxx.xxx.xxx.xxx</span></FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="ip"
                      component={renderMaskedField}
                      type="text"
                      mask={ipMask}
                      guide={false}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="button" onClick={form.reset}>
                    Cancel
                  </Button>
                </FormButtonToolbar>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

MaskExamples.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default MaskExamples;
