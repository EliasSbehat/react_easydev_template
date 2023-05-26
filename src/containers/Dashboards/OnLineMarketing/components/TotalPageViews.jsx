import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import {
  Card, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  DashboardWidgetCard,
  DashboardWidgetChartContainer,
  DashboardWidgetTotal,
  DashboardWidgetTotalWrap,
  DashboardWidgetTrendingIconUp,
} from '../../BasicDashboardComponents';

const data = [
  { id: 0, name: 'Page A', amt: 2400 },
  { id: 1, name: 'Page B', amt: 2210 },
  { id: 2, name: 'Page C', amt: 2290 },
  { id: 3, name: 'Page D', amt: 2000 },
  { id: 4, name: 'Page E', amt: 2181 },
  { id: 5, name: 'Page F', amt: 2500 },
  { id: 6, name: 'Page G', amt: 2100 },
  { id: 7, name: 'Page H', amt: 2290 },
  { id: 8, name: 'Page I', amt: 2000 },
  { id: 9, name: 'Page J', amt: 2181 },
];

const TotalPageViews = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (item) => {
    const index = data.indexOf(item.payload);
    setActiveIndex(index);
  };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <CardTitleWrap>
            <CardTitle>{t('online_marketing_dashboard.total_page_views')}</CardTitle>
          </CardTitleWrap>
          <DashboardWidgetTotalWrap>
            <DashboardWidgetTrendingIconUp />
            <DashboardWidgetTotal>
              {activeItem.amt}
            </DashboardWidgetTotal>
            <DashboardWidgetChartContainer>
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="amt" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#70bbfd'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </DashboardWidgetChartContainer>
          </DashboardWidgetTotalWrap>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default TotalPageViews;
