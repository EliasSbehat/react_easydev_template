import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  DashboardSocialStatItem,
  DashboardSocialStatProgress,
  DashboardSocialStatTitle,
} from '../../BasicStatisticComponents';

const social = [
  { id: 0, progress: 87, social: 'Twitter' },
  { id: 1, progress: 65, social: 'Facebook' },
  { id: 2, progress: 92, social: 'VK' },
  { id: 3, progress: 81, social: 'Instagram' },
  { id: 4, progress: 81, social: 'Linkedin' },
];

const SocialScore = ({ children, progress }) => (
  <DashboardSocialStatItem>
    <DashboardSocialStatTitle>
      {children}
    </DashboardSocialStatTitle>
    <DashboardSocialStatProgress wide>
      <ProgressBar top now={progress} label={`${progress}%`} size="small" gradient="blue" rounded />
    </DashboardSocialStatProgress>
  </DashboardSocialStatItem>
);

SocialScore.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const SocialMarketing = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      md={12}
      lg={6}
      xl={3}
      xs={12}
      title={t('app_dashboard.social_marketing_mobile')}
      subhead="Comes from social networks"
    >
      <div>
        {social.map(item => (
          <SocialScore key={item.id} progress={item.progress}>
            {item.social}
          </SocialScore>
        ))}
      </div>
    </Panel>
  );
};

export default SocialMarketing;


