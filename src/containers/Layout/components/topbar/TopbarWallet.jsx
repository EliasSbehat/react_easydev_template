import React, { useState } from 'react';
import { lighten } from 'polished';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';
import WalletIcon from 'mdi-react/WalletIcon';
import useWallet from '@/shared/components/wallet/hooks/useWallet';
import {
 colorBackground, colorHover, colorDarkText, colorBorder, colorGray,
} from '@/utils/palette';
import { marginLeft, right, left } from '@/utils/directions';
import { TopbarBack, TopbarDownIcon } from './BasicTopbarComponents';
import TopbarMenuLink, { TopbarLink } from './TopbarMenuLink';


const TopbarWallet = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { walletId, disconnect } = useWallet();

  if (walletId == null) {
    return null;
  }

  return (
    <TopbarProfileWrap>
      <TopbarWalletButton type="button" onClick={toggleProfile}>
        <WalletIcon />
        <TopbarWalletId>
          {`${walletId.slice(0, 2)}...${walletId.slice(-5, -1)}`}
        </TopbarWalletId>
        <TopbarDownIcon />
      </TopbarWalletButton>
      {isCollapsed && (
        <TopbarBack
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
      <Collapse in={isCollapsed}>
        <TopbarMenuWrap>
          <TopbarMenu>
            <TopbarMenuLink
              title="Wallet"
              path="/account/profile"
              onClick={toggleProfile}
            />
            <TopbarMenuLink
              title="Recent transactions"
              path="/default_pages/calendar"
              onClick={toggleProfile}
            />
            <TopbarMenuDivider />
            <TopbarMenuLink
              title="Disconnect"
              icon="exit"
              path="/connect_wallet"
              onClick={disconnect}
              iconRight
            />
          </TopbarMenu>
        </TopbarMenuWrap>
      </Collapse>
    </TopbarProfileWrap>
  );
};

export default TopbarWallet;

// region STYLES

const TopbarProfileWrap = styled.div`
  position: relative;
  margin-bottom: 0;
  ${marginLeft}: 0px;

  @media screen and (max-width: 576px) {
    margin: inherit;
  }

  @media screen and (max-width: 320px) {
    margin: auto 0;
  }
`;

const TopbarWalletButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: 0;
  border: none;
  transition: all 0.3s;
  box-shadow: none;
  background-color: transparent;

  &:hover, &:focus, &:active, &:focus:active {
    background-color: ${colorHover};
  }

  &:focus {
    outline: none;
  }

  &:before {
    display: none;
  }

  svg {
    margin: auto;
    height: 18px;
    width: 18px;
    fill: ${lighten(0.25, colorGray)};
  }
`;

const TopbarWalletId = styled.p`
  margin: auto 0;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  display: flex;
  ${marginLeft}: 10px;
  color: ${colorDarkText};

  @media screen and (min-width: 480px) {
      display: block;
  }
`;

const TopbarMenuWrap = styled.div`
  z-index: 101;
  position: absolute;
  width: 100%;
  min-width: 210px;
  ${right}: 0px;

  @media screen and (max-width: 320px) {
    ${right}: -50px;
  }
`;

const TopbarMenu = styled.div`
  width: 200px;
  border-radius: 0;
  border: none;
  padding: 15px 0;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0;
  background: ${colorBackground};

  button {
    padding: 0;

    &:hover {
      background-color: ${colorHover};
    }

    &${TopbarLink} {
      background-color: transparent;
      border: none;
      padding: 9px 20px;
    }
  }

  *:focus {
    outline: none;
  }

  @media screen and (min-width: 480px) {
    width: 100%;
    ${left}: 0px !important;
  }
`;

const TopbarMenuDivider = styled.div`
  margin: 15px 0;
  border-top: 1px solid ${colorBorder};
`;

// endregion
