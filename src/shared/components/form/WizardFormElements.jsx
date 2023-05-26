import styled from 'styled-components';
import { FormButtonToolbar, FormContainer } from '@/shared/components/form/FormElements';
import { CardBody } from '@/shared/components/Card';
import {
 colorAdditional, colorBlue, colorBorder, colorHover, colorWhite, colorBackground,
colorText, 
} from '@/utils/palette';


export const WizardWrap = styled(CardBody)`
  background-color: ${colorBackground};
`;

export const WizardFormContainer = styled(FormContainer)`
  max-width: 610px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 0 25px;
`;

export const WizardButtonToolbar = styled(FormButtonToolbar)`
  margin-left: auto;
  margin-right: auto;
`;


export const WizardSteps = styled.div`
  display: flex;
`;

export const WizardStep = styled.div`
  width: 100%;
  text-align: center;
  height: 55px;
  text-transform: uppercase;
  display: flex;
  transition: background 0.3s;
  border-radius: 5px;
  border: 1px solid ${props => (props.active ? colorBlue : colorBorder)};
  background: ${props => (props.active ? colorBlue : colorHover)};

  p {
    font-weight: 700;
    margin: auto;
    font-size: 14px;
    transition: all 0.3s;
    color: ${props => (props.active ? colorWhite : colorText)};
  }
`;

export const WizardFormWrap = styled.div`
  display: flex;
  justify-content: center;  
`;


export const WizardTitle = styled.h3`
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
`;

export const WizardDescription = styled.p`
  color: ${colorAdditional};
  margin: 0;
  max-width: 410px;
`;

