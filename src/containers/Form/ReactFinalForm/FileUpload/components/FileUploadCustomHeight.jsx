import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import renderDropZoneField from '@/shared/components/form/dropzones/DropZone';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { FormButtonToolbar, FormContainer } from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const FileUploadCustomHeight = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.file_upload.file_upload_custom_height')}</CardTitle>
            <CardSubhead>For files upload, use property
              <span className="red-text"> customHeight</span>
            </CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <FormContainer onSubmit={handleSubmit}>
                <Field
                  name="files"
                  component={renderDropZoneField}
                  customHeight
                />
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

FileUploadCustomHeight.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FileUploadCustomHeight;
