import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import { ToggleButtonField } from '@/shared/components/form/ToggleButton';

import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
import styled from 'styled-components';
import { colorText } from '@/utils/palette';

const dataYearly = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'June', uv: 2390 },
  { name: 'July', uv: 3490 },
  { name: 'Aug', uv: 2000 },
  { name: 'Sep', uv: 2780 },
  { name: 'Oct', uv: 1890 },
  { name: 'Nov', uv: 3578 },
  { name: 'Dec', uv: 2378 },
];

const dataMontly = [
  { name: '01.02', uv: 3654 },
  { name: '02.02', uv: 2578 },
  { name: '03.02', uv: 2000 },
  { name: '04.02', uv: 4383 },
  { name: '05.02', uv: 1890 },
  { name: '06.02', uv: 2390 },
  { name: '07.02', uv: 3490 },
  { name: '08.02', uv: 2000 },
  { name: '09.02', uv: 2780 },
  { name: '10.02', uv: 1890 },
  { name: '11.02', uv: 3578 },
  { name: '12.02', uv: 3644 },
  { name: '13.02', uv: 4000 },
  { name: '14.02', uv: 3000 },
  { name: '15.02', uv: 2000 },
  { name: '16.02', uv: 2780 },
  { name: '17.02', uv: 1890 },
  { name: '18.02', uv: 2390 },
  { name: '19.02', uv: 3490 },
  { name: '20.02', uv: 2000 },
  { name: '21.02', uv: 2780 },
  { name: '22.02', uv: 1890 },
  { name: '23.02', uv: 3578 },
  { name: '24.02', uv: 2390 },
  { name: '25.02', uv: 3578 },
  { name: '26.02', uv: 1890 },
  { name: '27.02', uv: 4000 },
  { name: '28.02', uv: 2378 },
];

const SalesStatisticBar = () => {
  const { t } = useTranslation('common');
  const [isYearly, setYearly] = useState(true);

  const themeName = useSelector(state => state.theme.className);

  const handleChange = () => {
    setYearly(!isYearly);
  };

  return (
    <Panel
      xl={3}
      lg={7}
      md={12}
      title={t('dashboard_commerce.sales_statistic')}
      subhead="See how effective your business is"
    >
      <div dir="ltr">
        <ResponsiveContainer height={260}>
          {isYearly ? (
            <BarChart data={dataYearly} margin={{ top: 20, left: -15 }}>
              <XAxis dataKey="name" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
              <CartesianGrid vertical={false} />
              <Bar dataKey="uv" name="Sales" fill="#ff4861" barSize={10} />
            </BarChart>
          ) : (
            <BarChart data={dataMontly} margin={{ top: 20, left: -15 }}>
              <XAxis dataKey="name" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
              <CartesianGrid vertical={false} />
              <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={4} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      <hr />
      <ToggleWrap>
        <ToggleLabel>Yearly</ToggleLabel>
        <ToggleButtonField
          name="sales"
          id="sales"
          onChange={handleChange}
          value={!isYearly}
        />
        <ToggleLabel>Monthly</ToggleLabel>
      </ToggleWrap>
    </Panel>
  );
};

export default SalesStatisticBar;

// region STYLES

const ToggleLabel = styled.span`
  color: ${colorText};
  
  &:first-child {
    margin-right: 10px;
  }
  
  &:last-child {
    margin-left: 10px;
  }
`;

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > div {
    width: auto;
  }
`;

// endregion
