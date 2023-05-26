import styled from 'styled-components';
import { Col } from 'react-bootstrap';

// eslint-disable-next-line import/prefer-default-export
export const TooltipCardWrap = styled(Col)`
  @media (min-width: 1426px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (min-width: 1200px) and (max-width: 1425px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
