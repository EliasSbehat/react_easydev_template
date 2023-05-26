import styled from 'styled-components';
import { darken } from 'polished';
import {
  colorAccent,
  colorBackground,
  colorBackgroundBody,
  colorBlue,
  colorBlueHover,
  colorDarkRed,
  colorDustyWhite,
  colorLightText,
  colorVeryLightRed,
  colorWhite,
} from '@/utils/palette';
import {
 borderLeft, borderRight, marginLeft, marginRight, right, left, paddingLeft,
} from '@/utils/directions';
import { PasswordIcon } from '../form/Password';
import { Button } from '../Button';
import {
 FormContainer, FormGroup, FormGroupIcon, FormFieldButton, FormGroupLabel,
} from '../form/FormElements';

export const AccountWrap = styled.div`
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow-y: auto;
  background: ${colorBackgroundBody};
`;

export const AccountContent = styled.div`
  margin: auto;
  padding: 10px;
  text-align: ${left};
`;

export const AccountCard = styled.div`
  padding: 50px 60px;
  max-width: 520px;
  width: 100%;
  background-color: ${colorBackground};

  @media screen and (max-width: 520px) {
    padding: 35px 30px;
  }

`;

export const AccountHead = styled.div`
  margin-bottom: 30px;
  ${paddingLeft}: 10px;
  ${borderLeft}: 4px solid ${colorBlue};
`;

export const AccountTitle = styled.h3`

`;

export const AccountLogo = styled.span`
  font-weight: 700;
`;

export const AccountLogoAccent = styled.span`
  color: ${colorBlue};
`;

export const AccountOr = styled.div`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;
  position: relative;

  &:before, &:after {
    content: "";
    height: 1px;
    width: calc(50% - 90px);
    background: ${colorDustyWhite};
    position: absolute;
    top: 10px;
  }

  &:before {
    ${left}: 0;
  }

  &:after {
    ${right}: 0;
  }
`;

export const AccountSocial = styled.div`
  text-align: center;
`;

export const AccountPhoto = styled(AccountWrap)`
  background: url(img/404/bg_404.jpeg) no-repeat center;
  background-size: cover;
  
  ${FormGroupLabel} {
    color: ${colorLightText};
  }

  ${AccountCard} {
    background-color: rgba(0, 10, 16, 0.8);
    color: ${colorWhite};
  }

  ${FormGroupIcon}, ${PasswordIcon}, ${FormFieldButton} {
    background: transparent;
  }

  ${FormGroupIcon}, ${PasswordIcon}, input:not(:last-child) {
    ${borderRight}: none;
  }
  
  ${FormGroupIcon}, ${PasswordIcon}, ${FormFieldButton}, input {
    border-color: ${colorWhite};
  }

  ${FormFieldButton}, input {
    ${borderLeft}: none
  }

  ${FormFieldButton}.active {

    svg {
      fill: ${colorAccent};
    }
  }

  input {
    color: ${colorWhite};
    box-shadow: none;
  }

  p {
    color: ${colorWhite};
  }

  ${AccountTitle} {
    color: ${colorWhite};
  }
`;

export const AccountButtons = styled.div`
  display: flex;
  width: calc(100% + 10px);
  margin-top: -10px;
  margin-bottom: -20px;
  ${marginRight}: 0;
  ${marginLeft}: -10px;

  a {
    margin-bottom: 20px;
    white-space: nowrap;
    ${marginRight}: 0;
    ${marginLeft}: 10px;
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

export const AccountButton = styled(Button)`
  width: 100%;
  ${marginRight}: 0;
  display: inline-block;
`;

export const AccountForgotPassword = styled.div`
  position: absolute;
  font-size: 11px;
  line-height: 15px;
  bottom: -18px;
  ${right}: 0;

  a {
    color: ${colorBlue};

    &:hover {
      color: ${colorBlueHover};
      text-decoration: none;
    }
  }
`;

export const ForgotFormGroup = styled(FormGroup)`
  margin-bottom: 40px;
`;

export const AccountHaveAccount = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    color: ${colorBlue};
    transition: all 0.3s;

    &:hover {
      color: ${colorBlueHover};
      text-decoration: none;
    }
  }
`;


export const LoginForm = styled(FormContainer)`
  
  .alert-danger {
    color: ${colorDarkRed};
    background-color: ${colorVeryLightRed};
  }
  .alert {
    position: relative;
    padding: 12px 20px;
    margin-bottom: 16px;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 100%
  }
`;

const AccountSocialButton = styled(Button)`
  display: inline-block;
  height: 38px;
  width: 38px;
  border-radius: 5px;
  padding: 9px;
  transition: all 0.3s;
  border: none;
  ${marginRight}: 10px;

  &:last-child {
    ${marginRight}: 0;
  }

  svg {
    fill: ${colorWhite};
    height: 20px;
    width: 20px;
  }
`;

export const AccountSocialButtonFacebook = styled(AccountSocialButton)`
  background: #4766a4;

  &:hover {
    background: ${darken(0.1, '#4766a4')};
  }
`;

export const AccountSocialButtonGoogle = styled(AccountSocialButton)`
  background: #c74d4d;

  &:hover {
    background: ${darken(0.1, '#c74d4d')};
  }
`;

export const AccountSocialButtonOffice = styled(AccountSocialButton)`
  background: #c46a3fff;

  &:hover {
    background: ${darken(0.1, '#c46a3fff')};
  }
`;

export const AccountSocialButtonFirebase = styled(AccountSocialButton)`
  background: #4287f5;
  padding: 0 0 0 5px;

  &:before {
    background-color: ${darken(0.1, '#4287f5')};
  }

  &:hover {
    background: ${darken(0.1, '#4287f5')};
  }
`;

export const AccountSocialButtonMetaMask = styled(AccountSocialButton)`
  background: #ECECEC;
  padding: 5px;

  &:hover {
    background: ${darken(0.1, '#ECECEC')};
  }
`;
export const AccountSocialButtonAuth0 = styled(AccountSocialButton)`
`;

export const AccountSocialButtonWalletConnect = styled(AccountSocialButton)`
  background: #3396ff;
  padding: 5px;

  &:hover {
    background: ${darken(0.1, '#3396ff')};
  }
`;
