import styled from 'styled-components';
import { CardBody } from '@/shared/components/Card';
import { colorBackground } from '@/utils/palette';

// eslint-disable-next-line import/prefer-default-export
export const ProfileCard = styled(CardBody)`
  height: 100%;
  padding: 0;
  background-color: ${colorBackground};

  .nav-item {
    text-transform: uppercase;
    font-weight: 500;
  }

  .tab-content {
    padding: 0 30px 40px 30px;
  }
  
  .rbc-toolbar {
    -webkit-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
`;
