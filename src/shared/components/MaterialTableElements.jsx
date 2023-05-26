import styled from 'styled-components';
import MaterialTable from '@material-ui/core/Table';
import MaterialTableSortLabel from '@material-ui/core/TableSortLabel';
import MaterialTableCell from '@material-ui/core/TableCell';
import MaterialTablePagination from '@material-ui/core/TablePagination';
import MaterialTableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MaterialMenu from '@material-ui/core/Menu';
import MaterialMenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MaterialToolbar from '@material-ui/core/Toolbar';
import {
 colorAccent, colorHover, colorText, colorBackground, colorBackgroundBody, colorIcon,
} from '@/utils/palette';
import { marginRight, right, left } from '@/utils/directions';

export const TableWrap = styled.div`
  overflow-x: auto;
`;

export const Table = styled(MaterialTable)`

  && th {
    white-space: nowrap;
  }
`;

export const TableCheckbox = styled(Checkbox)`
  
  && {
    transition: 0.3s;
    color: ${colorIcon};

    span {
      ${props => props.checked && `color: ${colorAccent};`}
    }
  }
`;

export const TableRow = styled(MaterialTableRow)`
  
  && {
    transition: 0.3s;
    cursor: pointer;

    &[aria-checked="true"] {
      background-color: ${colorHover};

      ${TableCheckbox} span {
        color: ${colorAccent};
      }
    }

    &:hover {
      background-color: ${colorBackgroundBody};
    }
  }
`;

export const TableCell = styled(MaterialTableCell)`
  
  && {
    color: ${colorText};
    ${props => props.right && `text-align: ${left(props)};`}
    ${props => props.sort && `
  
    span {
      transition: 0.3s;
      color: ${colorText(props)};
  
      &:hover {
        color: ${colorAccent};
      }
    }
  `}
  }
`;

export const TablePagination = styled(MaterialTablePagination)`

  && {
    float: ${right};

    button:hover {
      background-color: ${colorHover} !important;
    }

    & > div {
      padding: 0;
    }

    span, div, svg {
      color: ${colorText};
    }

    @media screen and (max-width: 768px) {
      div {
        margin-left: 8px;
        margin-right: 8px;

        &:last-child {
          ${marginRight}: 0;
        }

        &:first-child {
          margin: 0;
        }
      }

      div > span:first-of-type {
        display: none;
      }
    }
  }
`;

export const TableToolbarWrap = styled.div`
  position: absolute;
  top: 10px;
  ${right}: 0;
`;

export const TableButton = styled(IconButton)`

  && {
    color: ${colorText};
  }
`;

export const Toolbar = styled(MaterialToolbar)`

  && {
    padding: 0 30px;

    ${TableButton} {
      height: 36px;
      width: 36px;
      padding: 0;
    }
  }
`;

export const TableToolbarSelected = styled.h5`
  ${marginRight}: 10px;

    @media screen and (max-width: 420px) {

      span {
        display: none;
      }
    }
`;

export const Menu = styled(MaterialMenu)`

  && {
    div:last-child {
      box-shadow: 0 10px 30px 1px rgba(0, 0, 0, 0.06);
    }
  }
`;

export const MenuItem = styled(MaterialMenuItem)`
  
  && {
    transition: 0.3s;
    font-size: 13px;
    padding: 7px 24px;
    height: auto;
    color: ${colorText};
    background: ${colorBackground};

    &:hover {
      background: ${colorHover};
    }
  }
`;

export const TableSortLabel = styled(MaterialTableSortLabel)`

  && {
    color: ${colorText};
  }
`;
