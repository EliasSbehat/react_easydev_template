import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Table } from '@/shared/components/TableElements';
import Panel from '@/shared/components/Panel';
import ProgressBar from '@/shared/components/ProgressBar';
import { marginRight, left } from '@/utils/directions';

const Brasilia = `${process.env.PUBLIC_URL}/img/flags/Brasil.svg`;
const Argentina = `${process.env.PUBLIC_URL}/img/flags/Argentina.svg`;
const Gabon = `${process.env.PUBLIC_URL}/img/flags/Gabon.svg`;
const Ireland = `${process.env.PUBLIC_URL}/img/flags/Ireland.svg`;
const Italian = `${process.env.PUBLIC_URL}/img/flags/Italia.svg`;
const Sierra = `${process.env.PUBLIC_URL}/img/flags/Sierra.svg`;

const header = [
  { id: 0, title: 'Country' },
  { id: 1, title: 'Page views' },
  { id: 2, title: 'Device' },
  { id: 3, title: 'Bounce rate' },
];

const rows = [
  {
    id: 0,
    src: Brasilia,
    country: 'Brasilia',
    page_views: '12134',
    device: 'Desktop',
    value: 41,
  }, {
    id: 1,
    src: Argentina,
    country: 'Argentina',
    page_views: '47584',
    device: 'Mobile',
    value: 30,
  }, {
    id: 2,
    src: Gabon,
    country: 'Gabon',
    page_views: '24235',
    device: 'Desktop',
    value: 65,
  }, {
    id: 3,
    src: Italian,
    country: 'Italian',
    page_views: '2255',
    device: 'Desktop',
    value: 41,
  }, {
    id: 4,
    src: Sierra,
    country: 'Sierra Leone',
    page_views: '2421',
    device: 'Tablet',
    value: 31,
  }, {
    id: 5,
    src: Ireland,
    country: 'Ireland',
    page_views: '805',
    device: 'Mobile',
    value: 70,
  },
];

const AudienceByCountry = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} xl={8} md={12} title={t('online_marketing_dashboard.audience_by_country')}>
      <DashboardAudienceTable responsive bordered>
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td><DashboardTableFlag src={item.src} alt="flag" />{item.country}</td>
              <td>{item.page_views}</td>
              <td>{item.device}</td>
              <td>
                <ProgressBar now={item.value} label={`${item.value}%`} color="blue" />
              </td>
            </tr>
          ))}
        </tbody>
      </DashboardAudienceTable>
    </Panel>
  );
};

export default AudienceByCountry;

// region STYLES

const DashboardAudienceTable = styled(Table)`
  text-align: ${left};

  .progress {
    margin-top: 10px;
  }

  .progress-bar {
    height: 10px;
  }
`;

export const DashboardTableFlag = styled.img`
  width: 42px;
  height: 30px;
  ${marginRight}: 25px;
`;

// endregion
