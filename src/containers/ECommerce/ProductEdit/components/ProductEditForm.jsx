import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '@/shared/components/form/dropzones/DropZoneMultiple';
import renderSelectField from '@/shared/components/form/Select';
import {
  CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
  FormHalfContainer,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { marginRight } from '@/utils/directions';

const ProductEditForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <FormContainer className="product-edit" onSubmit={handleSubmit}>
        <FormHalfContainer>
          <FormGroup>
            <FormGroupLabel>Product Name</FormGroupLabel>
            <FormGroupField>
              <Field
                name="name"
                component="input"
                type="text"
              />
            </FormGroupField>
          </FormGroup>
          <FormGroupIdCategory>
            <FormGroupId>
              <FormGroupLabel>ID</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="id"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroupId>
            <FormGroup>
              <FormGroupLabel>Category</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="category"
                  component={renderSelectField}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </FormGroupField>
            </FormGroup>
          </FormGroupIdCategory>
          <FormGroup>
            <FormGroupLabel>
              Short description <span dir="ltr">(300 characters max)</span>
            </FormGroupLabel>
            <FormGroupField>
              <Field
                name="short_description"
                component="input"
                type="text"
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Full description</FormGroupLabel>
            <FormGroupField>
              <Field
                name="full_description"
                component="textarea"
                type="text"
              />
            </FormGroupField>
          </FormGroup>
          <CardTitleWrap>
            <CardTitle>Pricing</CardTitle>
          </CardTitleWrap>
          <FormGroupPriceDiscount>
            <FormGroupPrice>
              <FormGroupLabel>Price</FormGroupLabel>
              <FormGroupField>
                <FormGroupIcon>
                  <CurrencyUsdIcon />
                </FormGroupIcon>
                <Field
                  name="price"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroupPrice>
            <FormGroup>
              <FormGroupLabel>Discount</FormGroupLabel>
              <FormGroupField>
                <FormGroupIcon>
                  <TagIcon />
                </FormGroupIcon>
                <Field
                  name="discount"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroup>
          </FormGroupPriceDiscount>
          <CardTitleWrap>
            <CardTitle>General information</CardTitle>
          </CardTitleWrap>
          <FormContainer horizontal as="div">
            <FormGroup>
              <FormGroupLabel>Brand Name</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="brand"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Category</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="general_category"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Delivery Condition</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="delivery"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Weight</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="weight"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroup>
            <FormGroup>
              <FormGroupLabel>Size</FormGroupLabel>
              <FormGroupField>
                <Field
                  name="size"
                  component="input"
                  type="text"
                />
              </FormGroupField>
            </FormGroup>
          </FormContainer>
        </FormHalfContainer>
        <FormHalfContainer>
          <FormGroup>
            <FormGroupLabel>Upload photo</FormGroupLabel>
            <FormGroupField>
              <Field
                name="files"
                component={renderDropZoneMultipleField}
              />
            </FormGroupField>
          </FormGroup>
        </FormHalfContainer>
        <FormButtonToolbar>
          <Button variant="primary" type="submit">Save</Button>
          <Button variant="secondary" type="button" onClick={form.reset}>Cancel</Button>
        </FormButtonToolbar>
      </FormContainer>
    )}
  </Form>
);

ProductEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductEditForm;

// region STYLES

const FormGroupPrice = styled(FormGroup)`
  ${marginRight}: 20px;
  
  @media screen and (max-width: 767px) {
    ${marginRight}: 0;
  }
`;

const FormGroupPriceDiscount = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  & > div {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const FormGroupId = styled(FormGroup)`
  min-width: 100px;
  width: 40%;
  ${marginRight}: 20px;

  @media screen and (max-width: 767px) {
    ${marginRight}: 0;
    width: 100%;
  }
`;

const FormGroupIdCategory = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

// endregion
