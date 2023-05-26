import styled from 'styled-components';
import {
  colorAccent,
  colorAdditional,
  colorBackgroundBody,
  colorBorder, colorDustyWhite,
  colorFieldsBorder,
  colorText,
  colorWhite,
} from '@/utils/palette';
import {
  left,
  paddingLeft,
  direction,
  marginLeft,
  marginRight,
} from '@/utils/directions';
import { ButtonToolbar } from '../Button';

export const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  position: relative;
`;

export const FormGroupField = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  direction: ${direction};
`;

export const FormGroupLabel = styled.span`
  margin-bottom: 4px;
  display: inline-block;
  color: ${colorText};

  span {
    color: ${colorDustyWhite};
  }
`;

export const FormButtonToolbar = styled(ButtonToolbar)`
  margin-top: 10px;
  direction: ${direction};
`;

export const FormGroupDescription = styled.span`
  font-size: 10px;
  color: ${colorAdditional};
  line-height: 13px;
  margin-top: 2px;
`;

export const FormGroupIcon = styled.div`
  padding: 6px;
  height: 32px;
  background: ${colorFieldsBorder};
  border: 1px solid ${colorFieldsBorder};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${colorAdditional};
    width: 18px;
    height: 18px;
    transition: all 0.3s;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  text-align: ${left};
  direction: ${direction};

  input, textarea {
    width: 100%;
    padding: 5px 10px;
    font-size: 12px;
    height: 32px;
    transition: border 0.3s;
    background: transparent;
    border: 1px solid ${colorFieldsBorder};
    color: ${colorText};
    
    &::-webkit-input-placeholder {
      color: ${colorAdditional};
    }
    &::-moz-placeholder {
      color: ${colorAdditional};
    }
    /* Firefox 19+ */
    &:-moz-placeholder {
      color: ${colorAdditional};
    }
    /* Firefox 18- */
    &:-ms-input-placeholder {
      color: ${colorAdditional};
    }
    
    &[disabled] {
      background: ${colorBackgroundBody};

      &:focus, &:active {
        border-color: ${colorBorder};
      }
    }

    &:focus, &:active {
      outline: none;
      border-color: ${colorAccent};
    }
  }

  textarea {
    min-height: 85px;
  }

  ${props => props.horizontal && `

    ${FormGroup} {
      display: flex;
      flex-wrap: wrap;
    }

    ${FormGroupField} {
      width: calc(100% - 80px);
      ${paddingLeft(props)}: 10px;
      ${marginLeft(props)}: 80px;
    }

    ${FormGroupLabel} {
      width: 80px;
      max-height: 32px;
      line-height: 18px;
      margin: auto 0;

      & + ${FormGroupField} {
        ${marginLeft(props)}: 0;
      }
    }

    ${FormGroupDescription} {
      ${marginLeft(props)}: 90px;
    }

    ${FormButtonToolbar} {
      ${marginLeft(props)}: 0;
    }

    @media screen and (min-width: 480px) {

      ${FormGroupLabel} {
        width: 120px;
      }

      ${FormGroupField} {
        width: calc(100% - 120px);
        ${marginLeft(props)}: 120px;
        ${paddingLeft(props)}: 20px;
      }

      ${FormGroupDescription}, ${FormButtonToolbar} {
        ${marginLeft(props)}: 140px;
      }
    }
  `}

  ${props => props.preview && `
    display: flex;

    & > div:nth-child(2) {
      ${marginRight(props)}: 50px;
    }

    ${FormGroup} {
      margin-bottom: 10px;
      width: auto;
      min-height: 18px;
    }

    p {
      margin-bottom: 10px;
    }
  `}

  ${props => props.justify && `
    display: flex;
    flex-wrap: wrap;

    ${FormGroup} {
      width: 33.3333%;
    }

    ${FormButtonToolbar} {
      width: 100%;
    }
  `}
`;

export const FormHalfContainer = styled.div`
  width: calc(50% - 15px);
  height: 100%;

  &:first-child {
    ${marginRight}: 30px;
  }

  ${FormButtonToolbar} {
    float: right;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    ${marginRight}: 0;
  }
`;

export const FormFieldButton = styled.button`
  padding: 6px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s;
  background: ${props => (props.active ? colorAccent : colorFieldsBorder)};
  border: 1px solid ${props => (props.active ? colorAccent : colorFieldsBorder)};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => (props.active ? colorWhite : colorAdditional)};
    width: 18px;
    height: 18px;
    transition: all 0.3s;
  }
`;
