import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import ProgressBar from '@/shared/components/ProgressBar';
import { colorAdditional, colorAccent, colorRed } from '@/utils/palette';
import { marginRight } from '@/utils/directions';

const data = [
  {
    id: 0, title: 'Today', now: '$ 298,92', plan: '$ 250 planned', label: '100%', value: 100, isRed: false,
  }, {
    id: 1, title: 'This week', now: '$ 1423,01', plan: '$ 1500 planned', label: '98%', value: 98, isRed: true,
  }, {
    id: 2, title: 'This month', now: '$ 44321,74', plan: '$ 45000 planned', label: '87%', value: 87, isRed: true,
  },
];

const SalesReport = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={7} xl={5} sm={12} xs={12} title={t('dashboard_commerce.sales_report')}>
      <DashboardSalesReportWrap>
        {data.map(item => (
          <div key={item.id}>
            <DashboardSalesReportTitle>{item.title}</DashboardSalesReportTitle>
            <DashboardSalesReportNow>{item.now}</DashboardSalesReportNow>
            <DashboardSalesReportPlan>{item.plan}</DashboardSalesReportPlan>
            <DashboardSalesReportValue isRed={item.isRed}>
              {item.label}
            </DashboardSalesReportValue>
            <ProgressBar now={item.value} size="small" color={item.isRed ? 'pink' : ''} />
          </div>
        ))}
      </DashboardSalesReportWrap>
    </Panel>
  );
};

export default SalesReport;

// region STYLES

const DashboardSalesReportWrap = styled.div`
  display: flex;

  & > div {
    width: 100%;
    ${marginRight}: 25px;
    margin-bottom: 0;

    &:last-child {
      ${marginRight}: 0;
    }
  }

  p {
    margin-top: 0;
  }
`;

const DashboardSalesReportTitle = styled.p`
  color: ${colorAdditional};
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 10px;
`;

const DashboardSalesReportNow = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 4px;
`;

const DashboardSalesReportPlan = styled.p`
  font-size: 11px;
  line-height: 15px;
  color: ${colorAdditional};
  opacity: 0.5;
  margin-bottom: 10px;  
`;

const DashboardSalesReportValue = styled('p').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isRed'].includes(prop) && defaultValidatorFn(prop),
})`
  margin-bottom: 0;
  font-size: 10px;
  bottom: 16px;
  color: ${props => (props.isRed ? colorRed : colorAccent)}
`;

// endregion
