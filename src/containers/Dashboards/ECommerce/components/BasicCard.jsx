import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Panel from '@/shared/components/Panel';
import { colorBorder } from '@/utils/palette';
import { left } from '@/utils/directions';
import { CardSubhead } from '@/shared/components/Card';

const Dog = `${process.env.PUBLIC_URL}/img/for_store/dog/1.png`;

const BasicCard = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={6} xl={3} xs={12}>
      <div>
        <DashboardProductImageWrap>
          <img src={Dog} alt="" />
        </DashboardProductImageWrap>
        <DashboardProductTitle>{t('dashboard_commerce.basic_card')}</DashboardProductTitle>
        <DashboardProductSubhead>
          Knowledge nay estimable questions repulsive daughters boy.
        </DashboardProductSubhead>
        <p className="typography-message">
          <Link to="/e-commerce/catalog">View in the item list</Link>
        </p>
      </div>
    </Panel>
  );
};

export default BasicCard;

// region STYLES

const DashboardProductImageWrap = styled.div`
  max-height: 270px;
  height: 100%;
  padding: 10px 0 20px 0;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: 1px solid ${colorBorder};

  img {
    width: auto;
    max-width: 100%;
    max-height: 240px;
  }
`;

const DashboardProductTitle = styled.h5`
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 700;
`;

const DashboardProductSubhead = styled(CardSubhead)`
  text-align: ${left};
  font-size: 13px;
  line-height: normal;
`;

// endregion
