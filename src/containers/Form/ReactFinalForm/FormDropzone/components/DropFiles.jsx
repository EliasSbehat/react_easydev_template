import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import renderDropZoneMultipleField from '@/shared/components/form/dropzones/DropZoneMultiple';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { FormButtonToolbar, FormContainer } from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const DropFiles = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.form_dropzone.drop_files_to_upload')}</CardTitle>
            <CardSubhead>For multiply files upload</CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <FormContainer onSubmit={handleSubmit}>
                <Field
                  name="files"
                  component={renderDropZoneMultipleField}
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

DropFiles.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DropFiles;
