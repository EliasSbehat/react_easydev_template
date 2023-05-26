import styled from 'styled-components';
import {
  FormButtonToolbar,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { CardSubhead } from '@/shared/components/Card';
import { colorBackground, colorBorder } from '@/utils/palette';
import { marginLeft, right } from '@/utils/directions';

export const DashboardPlaceOrderFormWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }

  form {
    padding: 20px 20px 30px 20px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: ${colorBorder};
  }

  input {
    background-color: ${colorBackground};
  }

  ${FormGroupLabel} {
    width: 50px;
  }

  ${FormGroupField} {
    width: calc(100% - 50px);
  }

  ${FormButtonToolbar} {
    ${marginLeft}: 0;
    width: 100%;

    button {
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    width: calc(50% - 15px);
    margin-top: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 1360px) {
    width: calc(50% - 15px);
    margin-top: 0;
  }
`;

export const DashboardPlaceOrderSubhead = styled(CardSubhead)`
  position: absolute;
  font-size: 12px;
  top: 2px;
  ${right}: 0;
  margin-top: 0;
`;
