import React from 'react';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';
import ProgressBar from '@/shared/components/ProgressBar';
import styled from 'styled-components';

const data = [
  { id: 0, title: 'Completed Purchase', value: 46 },
  { id: 1, title: 'New clients', value: 67 },
  { id: 2, title: 'New subscribers', value: 87 },
  { id: 3, title: 'Site visits from ADS banners', value: 24 },
  { id: 4, title: 'Total page views', value: 56 },
  { id: 5, title: 'Positive feedback', value: 46 },
];

const GoalsCompletion = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      xs={12}
      md={12}
      lg={12}
      xl={4}
      title={t('online_marketing_dashboard.goals_completion')}
      subhead="What's your progress"
    >
      {data.map(item => (
        <ProgressWrap key={item.id}>
          <p>{item.title}</p>
          <ProgressBar now={item.value} label={`${item.value}%`} size="small" />
        </ProgressWrap>
      ))}
    </Panel>
  );
};

export default GoalsCompletion;

// region STYLES

const ProgressWrap = styled.div`
  margin-bottom: 20px;
`;
