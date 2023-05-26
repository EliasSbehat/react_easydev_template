import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie } from 'recharts';
import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { colorAdditional, colorRed } from '@/utils/palette';
import {
  DashboardStatChartWrap,
  DashboardStatLabel,
  DashboardStatWrap,
} from '../../BasicStatisticComponents';

const data01 = [{ value: 50, fill: '#4ce1b6' },
  { value: 50, fill: '#eeeeee' }];

const BudgetStatistic = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={6} xl={4} title={t('online_marketing_dashboard.budget_statistic')}>
      <DashboardBudgetStatWrap>
        <DashboardStatMain>
          <DashboardStatMnTitle>Total Budget</DashboardStatMnTitle>
          <DashboardStatMainNumber>$12,321</DashboardStatMainNumber>
          <hr />
        </DashboardStatMain>
        <DashboardStatChartWrap>
          <PieChart height={120} width={120}>
            <Pie data={data01} dataKey="value" cx={55} cy={55} innerRadius={50} outerRadius={60} />
          </PieChart>
          <DashboardStatLabel>$</DashboardStatLabel>
        </DashboardStatChartWrap>
        <DashboardStatData>
          <div>
            <DashboardStatDataNumber>$4,937</DashboardStatDataNumber>
            <p style={{ color: '#64677b' }}>Completed</p>
          </div>
          <div>
            <DashboardStatDataNumber>$7,566</DashboardStatDataNumber>
            <p style={{ color: '#4ce1b6' }}>Remaining</p>
          </div>
        </DashboardStatData>
      </DashboardBudgetStatWrap>
    </Panel>
  );
};

export default BudgetStatistic;

// region STYLES

const DashboardBudgetStatWrap = styled(DashboardStatWrap)`
  text-align: center;
  flex-wrap: wrap;

  ${DashboardStatChartWrap} {
    margin: auto;
  }

  ${DashboardStatLabel} {
    font-size: 36px;
  }
`;

const DashboardStatMain = styled.div`
  width: 100%;

  hr {
    margin-bottom: 30px;
    margin-top: 40px;
  }
`;

const DashboardStatMnTitle = styled.p`
  color: ${colorAdditional};
`;

const DashboardStatMainNumber = styled.p`
  color: ${colorRed};
  font-size: 48px;
  line-height: 34px;
  margin-top: 15px;
`;

const DashboardStatData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  p {
    margin: 0;
  }
`;

const DashboardStatDataNumber = styled.p`
  font-size: 18px;
  line-height: 34px;
  font-weight: 500;
`;

// endregion
