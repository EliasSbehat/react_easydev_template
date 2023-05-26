import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import EmoticonIcon from 'mdi-react/EmoticonIcon';
import CrosshairsGpsIcon from 'mdi-react/CrosshairsGpsIcon';
import Panel from '@/shared/components/Panel';
import { StyledSlider } from '@/shared/components/carousel/CarouselElements';
import {
 colorAdditional, colorBackgroundBody, colorIcon, colorRed, colorWhite, 
} from '@/utils/palette';
import { left, right } from '@/utils/directions';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 1 } },
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 1536, settings: { slidesToShow: 1 } },
    { breakpoint: 100000, settings: { slidesToShow: 2 } },
  ],
};

const ShortReminders = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={12} xl={4} sm={12} xs={12} title={t('dashboard_commerce.short_reminders')}>
      <DashboardRemindersCarousel {...settings}>
        <div>
          <DashboardRemindersSlide>
            <CrosshairsGpsIcon />
            <DashboardRemindersSlideTitle>Our goal</DashboardRemindersSlideTitle>
            <p>is creating a chain of jewelery stores</p>
          </DashboardRemindersSlide>
        </div>
        <div>
          <DashboardRemindersSlideRed>
            <EmoticonIcon />
            <DashboardRemindersSlideTitle>Our mission</DashboardRemindersSlideTitle>
            <p>is creating a chain of jewelery stores</p>
          </DashboardRemindersSlideRed>
        </div>
        <div>
          <DashboardRemindersSlide>
            <CrosshairsGpsIcon />
            <DashboardRemindersSlideTitle>Our goal</DashboardRemindersSlideTitle>
            <p>is creating a chain of jewelery stores</p>
          </DashboardRemindersSlide>
        </div>
        <div>
          <DashboardRemindersSlideRed>
            <EmoticonIcon />
            <DashboardRemindersSlideTitle>Our mission</DashboardRemindersSlideTitle>
            <p>is creating a chain of jewelery stores</p>
          </DashboardRemindersSlideRed>
        </div>
      </DashboardRemindersCarousel>
    </Panel>
  );
};

export default ShortReminders;

// region STYLES

const DashboardRemindersCarousel = styled(StyledSlider)`
  margin-bottom: -25px;

  .slick-dots {
    bottom: -35px;
  }

  .slick-arrow.slick-prev, .slick-arrow.slick-next {
    background: none;
    opacity: 0;
    pointer-events: none;
  }
`;

const DashboardRemindersSlide = styled.div`
  text-align: ${left};
  border-radius: 5px;
  padding: 15px 13px;
  position: relative;
  overflow: hidden;
  background: ${colorBackgroundBody};

  svg {
    position: absolute;
    height: 80px;
    width: 80px;
    top: calc(50% - 40px);
    opacity: 0.3;
    ${right}: -20px;
    fill: ${colorIcon};
  }

  p:last-of-type {
    color: ${colorAdditional};
    margin: 0;
  }
`;

const DashboardRemindersSlideTitle = styled.p`
  color: ${colorRed};
  font-size: 24px;
  font-weight: 500;
  margin-top: 0;
`;

const DashboardRemindersSlideRed = styled(DashboardRemindersSlide)`
  background: ${colorRed};

  p:last-of-type {
    color: white;
    opacity: 0.45;
  }

  svg {
    fill: ${colorWhite};
  }

  ${DashboardRemindersSlideTitle} {
    color: white;
    opacity: 1;
  }
`;

// endregion
