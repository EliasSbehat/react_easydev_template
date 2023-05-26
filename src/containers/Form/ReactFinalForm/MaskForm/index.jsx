import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import showResults from '@/utils/showResults';
import MaskExamples from './components/MaskExamples';

const MaskForm = () => {
  const { t } = useTranslation('common');

  const rtl = useSelector(state => state.rtl);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.mask_form.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <MaskExamples onSubmit={showResults} dir={rtl.direction} />
      </Row>
    </Container>
  );
};

export default MaskForm;
