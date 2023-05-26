import React from 'react';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';
import ProgressBar from '@/shared/components/ProgressBar';

const Emails = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={5} xl={3} sm={12} xs={12} title={t('dashboard_commerce.emails')}>
      <p>Open rate</p>
      <ProgressBar now={84} label="84%" size="small" color="pink" top />
      <p>Sent</p>
      <ProgressBar now={60} label="121/300" top size="small" />
    </Panel>
  );
};

export default Emails;
