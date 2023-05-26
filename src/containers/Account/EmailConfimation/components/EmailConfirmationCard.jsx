import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import EmailIcon from 'mdi-react/EmailIcon';
import CheckboxMarkedCircleIcon from 'mdi-react/CheckboxMarkedCircleIcon';
import { Card, CardBody } from '@/shared/components/Card';
import { ButtonToolbar, Button } from '@/shared/components/Button';
import { colorAccent, colorGray } from '@/utils/palette';
import { right } from '@/utils/directions';

const EmailConfirmationCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <EmailConfirmationWrap>
          <EmailConfirmationIcon>
            <EmailConfirmationSvg />
            <EmailConfirmationCheckSvg />
          </EmailConfirmationIcon>
          <EmailConfirmationTitle>
            Your e-mail address has been successfully verified
          </EmailConfirmationTitle>
          <EmailConfirmationSubtitle>
            Thank you for choosing the EasyDev
          </EmailConfirmationSubtitle>
          <EmailConfirmationButtonToolbar>
            <Button as={Link} variant="primary" to="/online_marketing_dashboard">Go to dashboard</Button>
            <Button as={Link} variant="primary" to="/account/profile">Go to profile</Button>
          </EmailConfirmationButtonToolbar>
        </EmailConfirmationWrap>
      </CardBody>
    </Card>
  </Col>
);

export default EmailConfirmationCard;

// region STYLES

const EmailConfirmationWrap = styled.div`
  min-height: calc(100vh - 185px);
  text-align: center;
`;

const EmailConfirmationButtonToolbar = styled(ButtonToolbar)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 65px;

  a {
    margin: 0 15px 20px 15px;
  }

  @media screen and (min-width: 576px) {
    padding-bottom: 135px;
  }
`;

const EmailConfirmationIcon = styled.div`
  margin: 0 auto;
  padding-top: 75px;
  position: relative;
  width: 120px;


  @media screen and (min-width: 576px) {
    padding-top: 155px;
  }
`;

const EmailConfirmationSvg = styled(EmailIcon)`
  fill: ${colorGray};
  opacity: 0.16;
  width: 120px;
  height: 120px;
`;


const EmailConfirmationCheckSvg = styled(CheckboxMarkedCircleIcon)`
  fill: ${colorAccent};
  height: 40px;
  width: 40px;
  position: absolute;
  ${right}: 0;
  top: 160px;
`;

const EmailConfirmationTitle = styled.h3`
  margin-bottom: 15px;
  color: ${colorGray};
`;

const EmailConfirmationSubtitle = styled.p`
  color: ${colorGray};
  font-size: 18px;
  line-height: 24px;
`;

// endregion
