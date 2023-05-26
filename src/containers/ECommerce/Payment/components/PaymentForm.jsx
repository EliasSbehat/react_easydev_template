import React from 'react';
import { Field, Form } from 'react-final-form';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
  FormGroupIcon,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { renderMaskedField } from '@/shared/components/form/FormField';
import { marginRight } from '@/utils/directions';
import { colorAdditional } from '@/utils/palette';

const MasterCard = `${process.env.PUBLIC_URL}/img/for_store/cards/mc.svg`;
const VisaCard = `${process.env.PUBLIC_URL}/img/for_store/cards/visa.svg`;
const PayPal = `${process.env.PUBLIC_URL}/img/for_store/cards/paypal.svg`;

const datePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');

const PaymentForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit} initialValues={{ card: 'mc' }}>
    {({ handleSubmit }) => (
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <FormGroupLabel>Choose payment method:</FormGroupLabel>
          <FormGroupField>
            <PaymentCreditCard>
              <Field
                name="card"
                component={renderRadioButtonField}
                label={(
                  <div>
                    <PaymentCreditCardImage src={MasterCard} alt="mc" />
                    <PaymentCreditCardName>MasterCard</PaymentCreditCardName>
                  </div>
                )}
                radioValue="mc"
              />
            </PaymentCreditCard>
            <PaymentCreditCard>
              <Field
                name="card"
                component={renderRadioButtonField}
                label={(
                  <div>
                    <PaymentCreditCardImage src={VisaCard} alt="visa" />
                    <PaymentCreditCardName>Visa</PaymentCreditCardName>
                  </div>
              )}
                radioValue="visa"
              />
            </PaymentCreditCard>
            <PaymentCreditCard>
              <Field
                name="card"
                component={renderRadioButtonField}
                label={(
                  <div>
                    <PaymentCreditCardImage src={PayPal} alt="paypal" />
                    <PaymentCreditCardName>PayPal</PaymentCreditCardName>
                  </div>
              )}
                radioValue="paypal"
              />
            </PaymentCreditCard>
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupLabel>Card number</FormGroupLabel>
          <FormGroupField>
            <FormGroupIcon>
              <CreditCardIcon />
            </FormGroupIcon>
            <Field
              name="card_number"
              component={renderMaskedField}
              type="text"
              mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroupDateCvc>
          <FormGroupDate>
            <FormGroupLabel>Expiration Date</FormGroupLabel>
            <FormGroupField>
              <Field
                name="date"
                component={renderMaskedField}
                type="text"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                pipe={datePipe}
                placeholder="DD/MM/YY"
                keepCharPositions
              />
            </FormGroupField>
          </FormGroupDate>
          <FormGroupCVC>
            <FormGroupLabel>CVC</FormGroupLabel>
            <FormGroupField>
              <Field
                name="cvc"
                component={renderMaskedField}
                type="text"
                mask={[/\d/, /\d/, /\d/]}
              />
            </FormGroupField>
          </FormGroupCVC>
        </FormGroupDateCvc>
        <FormGroup>
          <FormGroupLabel>Cardholder name</FormGroupLabel>
          <FormGroupField>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name and Surname"
            />
          </FormGroupField>
        </FormGroup>
        <PaymentTotal>Total Price: $348.00</PaymentTotal>
        <FormButtonToolbar>
          <Button variant="primary" type="submit">Make Payment</Button>
        </FormButtonToolbar>
      </FormContainer>
    )}
  </Form>
);

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;

// region STYLES

const FormGroupDate = styled(FormGroup)`
  width: 100%;
  ${marginRight}: 20px;


  @media screen and (max-width: 767px) {
    ${marginRight}: 0;
  }
`;

const FormGroupCVC = styled(FormGroup)`
  max-width: 280px;
  width: 100%;


  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

const FormGroupDateCvc = styled.div`
  display: flex;
  width: 100%;


  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const PaymentCreditCard = styled.div`
  ${marginRight}: 80px;

  &:last-child {
    ${marginRight}: 0;
  }

  @media screen and (max-width: 500px){
    ${marginRight}: 0!important;
  };
`;

const PaymentCreditCardImage = styled.img`
  width: 45px;
`;

const PaymentCreditCardName = styled.p`
  font-size: 10px;
  line-height: 13px;
  margin-top: 3px;
  color: ${colorAdditional};
  text-align: center;
  height: 0;
`;

const PaymentTotal = styled.h4`
  width: 100%;
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 20px;
`;

// endregion
