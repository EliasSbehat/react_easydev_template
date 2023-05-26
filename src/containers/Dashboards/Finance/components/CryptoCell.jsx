import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  AreaChart, Tooltip, Area, ResponsiveContainer, XAxis,
} from 'recharts';
import {
  Card, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import SimpleLoader from '@/shared/components/SimpleLoader';
import { colorRed } from '@/utils/palette';
import { COLORS_UP_DOWN } from '@/shared/constants/cryptocurrencies';
import {
  DashboardWidgetCard,
  DashboardWidgetChartContainer,
  DashboardWidgetTotal,
  DashboardWidgetTrendingIconUp,
  DashboardWidgetTrendingIconDown,
  DashboardWidgetTotalAreaWrap,
} from '../../BasicDashboardComponents';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length > 0) {
    return (
      <div className="dashboard__total-tooltip">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
  })),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: null,
};

const CryptoCell = ({
  dir, quote, symbol, name, fillOpacity,
  data, isQuoteLoading, isHistoryLoading,
}) => {
  const currentQuote = quote?.price || 0;
  const isTrendUp = Math.sign(quote?.percent_change_24h) > 0;
  const chartColor = isTrendUp ? COLORS_UP_DOWN.UP : COLORS_UP_DOWN.DOWN;

  const trend = (isTrendUp > 0)
  ? <DashboardWidgetTrendingIconUp />
  : <DashboardWidgetTrendingIconDown color={colorRed} />;

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <CardTitleWrap>
            <CardTitle>{symbol}</CardTitle>
            <CardSubhead>{name}</CardSubhead>
          </CardTitleWrap>
          <DashboardWidgetTotalAreaWrap>
            {
              isQuoteLoading
              ? (
                <CryptoCellQuoteLoading>
                  <SimpleLoader widthOrHeight={28} />
                </CryptoCellQuoteLoading>
                )
              : (
                <>
                  {trend}
                  <DashboardWidgetTotal>
                    {(currentQuote)?.toFixed(2)}
                  </DashboardWidgetTotal>
                </>
            )
            }
            <DashboardWidgetChartContainer>
              <ResponsiveContainer height={70}>
                {
                  isHistoryLoading
                  ? (
                    <CryptoCellChartLoading>
                      <SimpleLoader widthOrHeight={28} />
                    </CryptoCellChartLoading>
                    ) 
                  : (
                    <AreaChart
                      data={data}
                      margin={{ top: 0, left: 0, bottom: 0 }}
                    >
                      <XAxis
                        hide
                        reversed={dir === 'rtl'}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        name={symbol}
                        type="monotone"
                        dataKey="value"
                        fill={chartColor}
                        stroke={chartColor}
                        fillOpacity={fillOpacity}
                      />
                    </AreaChart>
                    )
                  }
              </ResponsiveContainer>
            </DashboardWidgetChartContainer>
          </DashboardWidgetTotalAreaWrap>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

CryptoCell.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired,
  quote: PropTypes.shape({
    price: PropTypes.number.isRequired,
    percent_change_1h: PropTypes.number.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
  }),
  fillOpacity: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
  isQuoteLoading: PropTypes.bool.isRequired,
  isHistoryLoading: PropTypes.bool.isRequired,
};

CryptoCell.defaultProps = {
  fillOpacity: 0.2,
  data: [],
  quote: null,
};

export default CryptoCell;

// region STYLES

const CryptoCellQuoteLoading = styled.div`
  display: flex;
  text-align: center;
  margin-top: 50px;
`;

const CryptoCellChartLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// endregion
