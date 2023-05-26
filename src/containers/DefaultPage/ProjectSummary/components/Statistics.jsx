import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';
import styled from 'styled-components';
import SimpleLoader from '@/shared/components/SimpleLoader';
import { Button } from '@/shared/components/Button';
import { colorBackground } from '@/utils/palette';
import { right, left, marginRight } from '@/utils/directions';

const data01 = [{ name: 'New Tasks', value: 40, fill: '#4ce1b6' },
  { name: 'Done Tasks', value: 175, fill: '#70bbfd' },
  { name: 'High Priority Task', value: 70, fill: '#ff4861' }];

const data012 = [{ name: 'New Tasks', value: 95, fill: '#4ce1b6' },
  { name: 'Done Tasks', value: 118, fill: '#70bbfd' },
  { name: 'High Priority Task', value: 59, fill: '#ff4861' }];

const data02 = [{ name: 'Minor Bugs', value: 150, fill: '#4ce1b6' },
  { name: 'Resolved Bugs', value: 75, fill: '#70bbfd' },
  { name: 'Critical Bugs', value: 75, fill: '#ff4861' }];

const data022 = [{ name: 'Minor Bugs', value: 62, fill: '#4ce1b6' },
  { name: 'Resolved Bugs', value: 115, fill: '#70bbfd' },
  { name: 'Critical Bugs', value: 65, fill: '#ff4861' }];

const tooltipColor = {
  color: '#70bbfd',
};

const Statistics = ({ dir }) => {
  const [update, setUpdate] = useState(false);
  const [data1, setData1] = useState(data01);
  const [data2, setData2] = useState(data02);

  const onUpdate = () => {
    const stateData1 = data1;
    const stateData2 = data2;

    setUpdate(true);
    const data11 = stateData1 === data01 ? data012 : data01;
    const data12 = stateData2 === data02 ? data022 : data02;
    setTimeout(() => {
      setUpdate(false);
      setData1(data11);
      setData2(data12);
    }, 2000);
  };

  return (
    <ProjectStatistics>
      {update ? <ProjectStatisticRefresh><SimpleLoader /></ProjectStatisticRefresh> : ''}
      <ProjectStatisticButton 
        variant="outline-secondary" 
        size="sm" 
        onClick={onUpdate}
      >
        Update Data
      </ProjectStatisticButton>
      <ProjectStatistic>
        <ProjectStatisticTitle>Task Statistic</ProjectStatisticTitle>
        <ProjectStatisticChartWrap dir={dir}>
          <PieChart width={300} height={270}>
            <Tooltip itemStyle={tooltipColor} />
            <Pie data={data1} dataKey="value" cx="50%" cy={110} innerRadius={60} outerRadius={80} label />
            <Legend />
          </PieChart>
        </ProjectStatisticChartWrap>
      </ProjectStatistic>
      <ProjectStatistic>
        <ProjectStatisticTitle>Bug Statistic</ProjectStatisticTitle>
        <ProjectStatisticChartWrap dir={dir}>
          <PieChart width={300} height={270}>
            <Tooltip itemStyle={tooltipColor} />
            <Pie data={data2} dataKey="value" cx="50%" cy={110} innerRadius={60} outerRadius={80} label />
            <Legend />
          </PieChart>
        </ProjectStatisticChartWrap>
      </ProjectStatistic>
    </ProjectStatistics>
  );
};

Statistics.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default Statistics;

// region STYLES

const ProjectStatistics = styled.div`
  text-align: ${left};
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const ProjectStatistic = styled.div`
  padding-top: 40px;
  width: 47%;
  ${marginRight}: 5px;

  .recharts-wrapper {
    direction: ltr;
    
    .recharts-legend-wrapper ul.recharts-default-legend {
      text-align: center;
      line-height: 24px;

      .recharts-legend-item .recharts-surface {
        ${marginRight}: 4px;
      }
    }
  }
  
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

const ProjectStatisticTitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;  
`;

const ProjectStatisticChartWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectStatisticButton = styled(Button)`
  position: absolute;
  top: 0;
  ${right}: 15px;
`;

const ProjectStatisticRefresh = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  ${left}: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    ${left}: 0;
    border-radius: 5px;
    background-color: ${colorBackground};
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: calc(50% - 24px);
    ${left}: calc(50% - 24px);
  }
`;

// endregion
