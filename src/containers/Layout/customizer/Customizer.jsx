import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseIcon from 'mdi-react/CloseIcon';
import {
  colorAccent,
  colorAdditional,
  colorBorder,
  colorBackground,
} from '@/utils/palette';
import {
  right,
  left,
} from '@/utils/directions';
import {
  changeDirectionToRTL, changeDirectionToLTR,
} from '@/redux/actions/rtlActions';
import { toggleTopNavigation } from '@/redux/actions/customizerActions';
import {
  changeRoundBordersToOnAction, changeRoundBordersToOffAction,
} from '@/redux/actions/roundBordersActions';
import {
  changeBlocksShadowsToOnAction, changeBlocksShadowsToOffAction,
} from '@/redux/actions/blocksShadowsActions';
import { useDispatch, useSelector } from 'react-redux';
import CustomizerToggle from './CustomizerToggle';

const settings = `${process.env.PUBLIC_URL}/img/settings.svg`;

const Customizer = ({
  changeSidebarVisibility,
  changeToDark,
  changeToLight,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const {
    sidebar,
    customizer,
    theme,
    rtl,
    border,
    shadow,
  } = useSelector(state => ({
    customizer: state.customizer,
    sidebar: state.sidebar,
    theme: state.theme,
    rtl: state.rtl,
    border: state.border,
    shadow: state.shadow,
  }));

  const dispatch = useDispatch();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeToRTL = () => {
    dispatch(changeDirectionToRTL());
  };

  const changeToLTR = () => {
    dispatch(changeDirectionToLTR());
  };

  const changeRoundBordersOn = () => {
    dispatch(changeRoundBordersToOnAction());
  };

  const changeRoundBordersOff = () => {
    dispatch(changeRoundBordersToOffAction());
  };

  const changeBlocksShadowsOn = () => {
    dispatch(changeBlocksShadowsToOnAction());
  };

  const changeBlocksShadowsOff = () => {
    dispatch(changeBlocksShadowsToOffAction());
  };

  const topNavigation = () => {
    dispatch(toggleTopNavigation());
  };

  return (
    <CustomizerWrap>
      <CustomizerButton type="button" onClick={handleOpen}>
        <CustomizerButtonIcon src={settings} alt="icon" />
      </CustomizerButton>
      <CustomizerContent open={isOpen} hidden={!isOpen}>
        <CustomizerTitleWrap>
          <h5>Theme Customizer</h5>
          <CustomizerCloseButton type="button" onClick={handleOpen}>
            <CloseIcon />
          </CustomizerCloseButton>
        </CustomizerTitleWrap>
        <CustomizerCaption>
          This customizer allows you to see the different variations of the EasyDev.
          Create your own visual style for every project you do!
        </CustomizerCaption>
        <CustomizerToggle
          title="Collapsed Menu"
          name="collapse_toggle"
          onChange={changeSidebarVisibility}
          checked={sidebar.collapse}
          id="collapse_toggle"
        />
        <CustomizerToggle
          title="Top Menu"
          name="collapse_top_menu_toggletoggle"
          onChange={topNavigation}
          checked={customizer.topNavigation}
          id="top_menu_toggle"
        />
        <CustomizerToggle
          title="Dark Theme"
          name="theme_toggle"
          onChange={theme.className === 'dark' ? changeToLight : changeToDark}
          checked={theme.className === 'dark'}
          id="theme_toggle"
        />
        <CustomizerToggle
          title="Round Borders"
          name="square_toggle"
          onChange={border.className === 'on' ? changeRoundBordersOff : changeRoundBordersOn}
          checked={border.className === 'on'}
          id="square_toggle"
        />
        <CustomizerToggle
          title="Block's Shadows"
          name="shadow_toggle"
          onChange={shadow.className === 'on'
            ? changeBlocksShadowsOff : changeBlocksShadowsOn}
          checked={shadow.className === 'on'}
          id="shadow_toggle"
        />
        <CustomizerToggle
          title="RTL mode"
          name="direction_toggle"
          onChange={rtl.direction === 'rtl' ? changeToLTR : changeToRTL}
          checked={rtl.direction === 'rtl'}
          id="direction_toggle"
        />
      </CustomizerContent>
    </CustomizerWrap>
  );
};

Customizer.propTypes = {
  changeSidebarVisibility: PropTypes.func.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

export default Customizer;

// region STYLES

const CustomizerWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 102;
  ${right}: 0;
`;

const CustomizerContent = styled.div`
  height: 100vh;
  width: 240px;
  box-shadow: ${props => (props.open ? '0 1px 30px 1px rgba(0, 0, 0, 0.11)' : 'none')};
  padding: 20px;
  transform: translateX(${props => (props.open ? 0 : '100%')});
  transition: transform 0.3s;
  position: fixed;
  top: 0;
  z-index: 102;
  ${right}: 0;
  background-color: ${colorBackground};
`;

const CustomizerButton = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 350px;
  border: none;
  border-radius: 3px 0 0 3px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  z-index: 102;
  ${right}: 0;
  background-color: ${colorBackground};
`;

const CustomizerButtonIcon = styled.img`
  width: 18px;
  height: 18px;
  animation: iconOpacity linear infinite 4s;

  @keyframes iconOpacity {

    from {
      opacity: 1
    }
    50% {
      opacity: 0.3
    }
    to {
      opacity: 1
    }
  }
`;

const CustomizerTitleWrap = styled.div`
  padding-bottom: 20px;
  position: relative;
  text-align: ${left};
  border-bottom: 1px solid ${colorBorder};
`;

const CustomizerCaption = styled.p`
  color: ${colorAdditional};
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: ${left};
`;

const CustomizerCloseButton = styled.button`
  position: absolute;
  top: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  ${right}: 0;

  svg {
    fill: ${colorAdditional};
    width: 14px;
    height: 14px;
    transition: 0.3s;
  }

  &:hover {

    svg {
      fill: ${colorAccent};
    }
  }
}
`;

// endregion
