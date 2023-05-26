import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Row,
  Collapse,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {
 colorAdditional, colorBackground, colorBorder, colorIcon, colorText, 
} from '@/utils/palette';
import { right } from '@/utils/directions';
import ReactTableCustomizerToggle from './ReactTableCustomizerToggle';

const ReactTableCustomizer = ({
  handleClickIsEditable,
  handleClickIsResizable,
  handleClickIsSortable,
  handleClickWithDragAndDrop,
  handleClickWithPagination,
  handleClickWithSearchEngine,
  isEditable,
  isResizable,
  isSortable,
  isDisabledDragAndDrop,
  isDisabledEditable,
  isDisabledResizable,
  withDragAndDrop,
  withPagination,
  withSearchEngine,
  fullCustomizer,
}) => {
  const arrayTableCustomizerSingleToggle = [
    {
      id: 0, text: 'Filtration mode', func: handleClickWithSearchEngine, isChecked: withSearchEngine,
    },
    {
      id: 1, text: 'Sortable mode', func: handleClickIsSortable, isChecked: isSortable,
    },
    {
      id: 2, text: 'Pagination mode', func: handleClickWithPagination, isChecked: withPagination,
    },
  ];
  const arrayTableCustomizerAddictionToggle = [
    {
      id: 0,
      text: 'Drag&Drop mode',
      func: handleClickWithDragAndDrop,
      isChecked: withDragAndDrop,
      isDisabled: isDisabledDragAndDrop,
      tooltip: 'Drag&Drop mode cannot be performed at the same time with Resizable Mode',
    },
    {
      id: 1,
      text: 'Editable mode',
      func: handleClickIsEditable,
      isChecked: isEditable,
      isDisabled: isDisabledEditable,
      tooltip: 'Editable mode cannot be performed at the same time with Resizable Mode',
    },
    {
      id: 2,
      text: 'Resizable mode',
      func: handleClickIsResizable,
      isChecked: isResizable,
      isDisabled: isDisabledResizable,
      tooltip: 'Resizable mode cannot be performed at the same time with Drag&Drop and Editable Mode',
    },
  ];
  const [collapse, setCollapse] = useState(false);

  const handleOpen = () => {
    setCollapse(!collapse);
  };

  return (
    <ReactTableCustomizerWrap>
      <div>
        <CustomizerButton type="button" onClick={handleOpen}>
          <h5>Table customizer</h5>
          <CustomizerButtonIcon />
        </CustomizerButton>
        {collapse && (
          <CollapseBack
            aria-label="collapse-back"
            type="button"
            onClick={handleOpen}
          />
        )}
        <Collapse in={collapse}>
          <CollapseContent>
            <TitleWrap>
              <p>This customizer allows you to see the different variations of the data table.</p>
            </TitleWrap>
            <CollapseItem>
              {arrayTableCustomizerSingleToggle.map(item => (
                <ReactTableCustomizerToggle
                  key={item.id}
                  text={item.text}
                  handleClick={item.func}
                  isChecked={item.isChecked}
                />
              ))}
            </CollapseItem>
            {fullCustomizer && (
              <CollapseItem>
                {arrayTableCustomizerAddictionToggle.map((item) => {
                  const toggle = (
                    <div key={item.id} id={`tooltip-${item.id}`}>
                      <ReactTableCustomizerToggle
                        text={item.text}
                        handleClick={item.func}
                        isChecked={item.isChecked}
                        isDisabled={item.isDisabled}
                      />
                    </div>
                  );
                  if (!item.isDisabled) {
                    return toggle;
                  }
                  return (
                    <OverlayTrigger
                      key={item.id}
                      placement="left"
                      overlay={(
                        <CustomizerTooltip>
                          {item.tooltip}
                        </CustomizerTooltip>
                      )}
                    >
                      {toggle}
                    </OverlayTrigger>
                );
                })}
              </CollapseItem>
            )}
          </CollapseContent>
        </Collapse>
      </div>
    </ReactTableCustomizerWrap>
  );
};

ReactTableCustomizer.propTypes = {
  handleClickIsEditable: PropTypes.func,
  handleClickIsResizable: PropTypes.func,
  handleClickIsSortable: PropTypes.func.isRequired,
  handleClickWithDragAndDrop: PropTypes.func,
  handleClickWithPagination: PropTypes.func.isRequired,
  handleClickWithSearchEngine: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  isResizable: PropTypes.bool,
  isSortable: PropTypes.bool.isRequired,
  isDisabledDragAndDrop: PropTypes.bool,
  isDisabledEditable: PropTypes.bool,
  isDisabledResizable: PropTypes.bool,
  withDragAndDrop: PropTypes.bool,
  withPagination: PropTypes.bool.isRequired,
  withSearchEngine: PropTypes.bool.isRequired,
  fullCustomizer: PropTypes.bool,
};

ReactTableCustomizer.defaultProps = {
  handleClickIsEditable: () => {},
  handleClickIsResizable: () => {},
  handleClickWithDragAndDrop: () => {},
  isEditable: false,
  isResizable: false,
  isDisabledDragAndDrop: false,
  isDisabledEditable: false,
  isDisabledResizable: false,
  withDragAndDrop: false,
  fullCustomizer: false,
};

export default ReactTableCustomizer;

// region STYLES

const ReactTableCustomizerWrap = styled(Row)`
  padding: 0 20px 20px 15px;
`;

const CollapseContent = styled.div`
  width: 275px;
  position: absolute;
  z-index: 101;
  box-shadow: 0 10px 25px 0 rgba(33, 36, 50, 0.13);
  ${right}: 20px;
  background: ${colorBackground};
`;

const CollapseItem = styled.div`
  padding: 10px 20px 25px 20px;
  border-bottom: 1px solid ${colorBorder};
`;

const CustomizerTooltip = styled(Tooltip)`
  &.tooltip {
    z-index: 101;
  }
`;

const TitleWrap = styled.div`
  padding: 25px 20px 10px 20px;
  border-bottom: 1px solid ${colorBorder};

  p {
    color: ${colorAdditional};
  }
`;

const CollapseBack = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border: none;
`;

const CustomizerButton = styled.button`
  font-size: 18px;
  height: 100%;
  padding: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  transition: all 0.3s;
  color: ${colorText};

  h5 {
    color: ${colorAdditional};
    margin-right: 10px;
  }

  svg {
    margin: auto;
    height: 18px;
    width: 18px;
    fill: ${colorIcon};
  }

  @media screen and (max-width: 640px) {
    padding: 0 5px;
  }

  @keyframes beforePulse {

    from {
      width: 7px;
      height: 7px;
    }

    25% {
      width: 13px;
      height: 13px;
    }

    to {
      width: 7px;
      height: 7px;
    }
  }
`;

const CustomizerButtonIcon = styled(DownIcon)`
  margin: auto 0;
`;

// endregion
