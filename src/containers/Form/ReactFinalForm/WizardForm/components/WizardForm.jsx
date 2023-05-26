import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { Card } from '@/shared/components/Card';
import {
  WizardFormWrap,
  WizardStep,
  WizardSteps,
  WizardWrap,
} from '@/shared/components/form/WizardFormElements';
import WizardFormOne from './WizardFormOne';
import WizardFormTwo from './WizardFormTwo';
import WizardFormThree from './WizardFormThree';

const WizardForm = ({ onSubmit }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const nextPage = (values) => {
    setPage(page + 1);
    setData(values);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const handleSubmit = (values) => {
    setData(values);
    onSubmit(values);
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
              {page === 1 && <WizardFormOne onSubmit={nextPage} initialValues={data} />}
              {page === 2 && (
                <WizardFormTwo
                  previousPage={previousPage}
                  onSubmit={nextPage}
                  initialValues={data}
                />
              )}
              {page === 3 && (
                <WizardFormThree
                  previousPage={previousPage}
                  onSubmit={handleSubmit}
                  initialValues={data}
                />
              )}
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
