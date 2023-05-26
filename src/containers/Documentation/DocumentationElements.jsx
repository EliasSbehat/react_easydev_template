import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { CardBody, CardTitleWrap } from '@/shared/components/Card';
import { colorBlackBackground, colorText, scrollbarStyles } from '@/utils/palette';
import { left, paddingLeft } from '@/utils/directions';


export const DocumentContainer = styled(Container)`
  min-height: calc(100vh - 90px);
  position: relative;
  padding-bottom: 75px;
  text-align: ${left};

  .table-responsive {
    margin-top: 10px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  pre {
    background-color: ${colorBlackBackground} !important;
    margin: 10px 0 30px 0 !important;
    font-size: 14px;
    border-radius: 8px;
    overflow: auto;
    
    ${scrollbarStyles};

    &:last-child {
      margin-bottom: 0 !important;
    }
  }

  ${CardTitleWrap}:not(:first-child) {
    margin-top: 30px;
  }

  ol {
    margin-top: 5px;
    margin-bottom: 20px;
    ${paddingLeft}: 30px;
    color: ${colorText};
  }

  ul {
    color: ${colorText};
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 30px;
  }
`;

export const DocumentationMain = styled(Row)`
  flex-direction: row-reverse;
  
  p:not(:last-of-type) {
    margin-top: 10px;
  }

  @media screen and (max-width: 991px) {
    flex-direction: row;
  }
`;

export const DocumentationChangelog = styled(CardBody)`

  h5 {
    text-transform: none;
  }

  ul {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
