import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { Card } from '@/shared/components/Card';
import {
 WizardFormWrap, WizardStep, WizardSteps, WizardWrap, 
} from '@/shared/components/form/WizardFormElements';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const WizardForm = ({ onSubmit }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  const nextPage = (newData) => {
    setData(newData);
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const submitHandler = (newData) => {
    setData(newData);
    onSubmit(newData);
  };

  return (
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <WizardWrap>
            <WizardSteps>
              <WizardStep active={page === 1}><p>Step 1</p></WizardStep>
              <WizardStep active={page === 2}><p>Step 2</p></WizardStep>
              <WizardStep active={page === 3}><p>Step 3</p></WizardStep>
            </WizardSteps>
            <WizardFormWrap>
              {page === 1 && <StepOne onSubmit={nextPage} defaultValues={data} />}
              {page === 2 && <StepTwo previousPage={previousPage} onSubmit={nextPage} defaultValues={data} />}
              {page === 3 && <StepThree previousPage={previousPage} onSubmit={submitHandler} defaultValues={data} />}
            </WizardFormWrap>
          </WizardWrap>
        </Card>
      </Col>
    </Row>
  );
};

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
