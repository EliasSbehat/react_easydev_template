import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { colorHover, colorRed } from '@/utils/palette';
import { left, marginRight } from '@/utils/directions';

const Ava1 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/14.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava5 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;
const Ava6 = `${process.env.PUBLIC_URL}/img/ava.png`;

const data = [
  {
    id: 0, name: 'Peter Jackson', result: '12,254 km', ava: Ava1,
  }, {
    id: 1, name: 'Lora Melbourn', result: '11,224 km', ava: Ava2,
  }, {
    id: 2, name: 'Cat Mew', result: '9,921 km', ava: Ava3,
  }, {
    id: 3, name: 'Liza Orly', result: '7,875 km', ava: Ava4,
  }, {
    id: 4, name: 'Michael Bro', result: '6,154 km', ava: Ava5,
  }, {
    id: 5, name: 'Charlie Sunset', result: '6,154 km', ava: Ava6,
  },
];

const MyCompetitors = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={5} xl={3} md={12} xs={12} title={t('fitness_dashboard.my_competitors')}>
      {data.map(item => (
        <DashboardCompetitor key={item.id} to="/account/profile">
          <DashboardCompetitorImageWrap>
            <img src={item.ava} alt="" />
          </DashboardCompetitorImageWrap>
          <DashboardCompetitorInfo>
            <DashboardCompetitorName>{item.name}</DashboardCompetitorName>
            <DashboardCompetitorResult>{item.result}</DashboardCompetitorResult>
          </DashboardCompetitorInfo>
        </DashboardCompetitor>
      ))}
    </Panel>
  );
};

export default MyCompetitors;

// region STYLES

const DashboardCompetitor = styled(Link)`
  display: flex;
  padding: 10px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: calc(100% + 65px);
    top: 0;
    ${left}: -30px;
    z-index: 0;
    opacity: 0;
    transition: all 0.3s;
    background: ${colorHover};
  }

  &:hover {

    &:before {
      opacity: 1;
    }
  }
`; 

const DashboardCompetitorImageWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  ${marginRight}: 10px;
  min-width: 40px;
  z-index: 1;

  img {
    height: 100%;
    min-width: 100%;
  }
`;

const DashboardCompetitorInfo = styled.div`
  text-align: ${left};
  z-index: 1;
`;

const DashboardCompetitorName = styled.p`
  font-weight: 500;
`;

const DashboardCompetitorResult = styled.p`
  color: ${colorRed};
  margin-top: 0;
  font-size: 14px;
`;

// endregion
