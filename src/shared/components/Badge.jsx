import { Badge as BootstrapBadge } from 'react-bootstrap';
import styled from 'styled-components';
import {
  colorAccent, colorBlue, colorGray, colorLightGray, colorRed, colorWhite, colorYellow,
} from '@/utils/palette';

const getColor = (variant) => {
  switch (true) {
    case variant?.includes('secondary'):
      return colorLightGray;
    case variant?.includes('primary'):
      return colorBlue;
    case variant?.includes('success'):
      return colorAccent;
    case variant?.includes('warning'):
      return colorYellow;
    case variant?.includes('danger'):
      return colorRed;
    default:
      return colorLightGray;
  }
};

const Badge = styled(BootstrapBadge)`
  color: ${props => (props.bg === 'secondary' ? colorGray : colorWhite)};
  background-color: ${props => getColor(props.bg)} !important;
  font-weight: 500;
`;

export default Badge;
