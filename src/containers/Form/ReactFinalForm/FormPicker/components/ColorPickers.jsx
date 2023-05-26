import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import renderBlockColorPickerField from '@/shared/components/form/color-pickers/BlockColorPicker';
import renderSketchColorPickerField from '@/shared/components/form/color-pickers/SketchColorPicker';
import renderChromeColorPickerField from '@/shared/components/form/color-pickers/ChromeColorPicker';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
 FormContainer, FormGroup, FormGroupField, FormGroupLabel, 
} from '@/shared/components/form/FormElements';

const ColorPickers = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.from_picker.color_picker')}</CardTitle>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <FormColorPickerContainer justify onSubmit={handleSubmit}>
                <FormColorPickerGroup>
                  <FormGroupLabel>Sketch Color Picker</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="sketch_color"
                      component={renderSketchColorPickerField}
                    />
                  </FormGroupField>
                </FormColorPickerGroup>
                <FormColorPickerGroup>
                  <FormGroupLabel>Block Color Picker</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="block_color"
                      component={renderBlockColorPickerField}
                    />
                  </FormGroupField>
                </FormColorPickerGroup>
                <FormColorPickerGroup>
                  <FormGroupLabel>Chrome Color Picker</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="chrome_color"
                      component={renderChromeColorPickerField}
                    />
                  </FormGroupField>
                </FormColorPickerGroup>
              </FormColorPickerContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

ColorPickers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColorPickers;

// region STYLES

const FormColorPickerGroup = styled(FormGroup)`
  @media screen and (max-width: 767px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

const FormColorPickerContainer = styled(FormContainer)`
  @media screen and (max-width: 767px) {
    justify-content:  space-between;
  }
`;

// endregion
