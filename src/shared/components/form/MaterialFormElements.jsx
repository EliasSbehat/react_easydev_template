import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { colorAccent, colorFieldsBorder, colorText } from '@/utils/palette';
import { left, right } from '@/utils/directions';

export const MaterialFormContainer = styled.form`
  text-align: ${left};
  
  label {
    font-size: 12px;
    color: ${colorText};

    &[data-shrink="true"] {
      transform: translate(0, 1.5px) scale(0.85);
    }
  }
`;

export const MaterialFormLabel = styled.span`
  margin: 0;
  font-size: 12px;
  color: ${colorText};
`;

export const MaterialTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px !important;

  div {
    color: ${colorText};
  }

  & > div:before {
    border-bottom-color: ${colorFieldsBorder};
  }

  & > div:hover:before {
    border-bottom: 1px solid ${colorAccent} !important;
  }

  & > div:after {
    border-color: ${colorAccent};
  }

  input, textarea {
    font-size: 12px;
    color: ${colorText};
  }

  label {
    ${left}: 0;
    ${right}: auto;
  }

  svg {
    ${left}: auto;
    ${right}: 0;
    fill: ${colorText};
  }
`;

export const MaterialFormOption = styled(MenuItem)`
  font-size: 13px !important;
  height: 18px !important;
`;
