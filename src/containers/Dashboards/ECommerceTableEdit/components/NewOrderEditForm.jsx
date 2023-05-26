import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { renderMaskedField } from '@/shared/components/form/FormField';

const moneyMask = createNumberMask({
  prefix: '$ ',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
});

const NewOrderEditForm = ({ onSubmit }) => {
  const initialValues = useSelector(state => state.newOrder.data);
  
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>Edit {initialValues.title}</CardTitle>
          </CardTitleWrap>
          <Form onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit }) => (
              <FormContainer horizontal onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Title</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="title"
                      component="input"
                      type="text"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Quantity</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="quantity"
                      component="input"
                      type="number"
                      parse={value => (parseInt(value, 10))}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Sold</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="sold"
                      component="input"
                      type="number"
                      parse={value => (parseInt(value, 10))}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Total</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="total"
                      component={renderMaskedField}
                      type="text"
                      mask={moneyMask}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Image URL</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="img"
                      component="input"
                      type="text"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button as={Link} variant="secondary" to="/e_commerce_dashboard">Cancel</Button>
                </FormButtonToolbar>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

NewOrderEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewOrderEditForm;
