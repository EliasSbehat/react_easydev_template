import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import { COLORS_UP_DOWN } from '@/shared/constants/cryptocurrencies';

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

const TopTenRow = ({
  crypto,
  index,
  chartData,
}) => {
  const { t } = useTranslation('common');

  const isTrendUp = Math.sign(crypto?.quote.USD.percent_change_7d) > 0;
  const chartColor = isTrendUp ? COLORS_UP_DOWN.UP : COLORS_UP_DOWN.DOWN;

  return (
    <tr key={crypto.id}>
      <td>{index + 1}</td>
      <td>{crypto.name}</td>
      <td dir="ltr">$ {crypto.quote.USD.market_cap.toFixed(2)}</td>
      <td dir="ltr">$ {crypto.quote.USD.price.toFixed(2)}</td>
      <td dir="ltr">$ {crypto.quote.USD.volume_24h.toFixed(2)}</td>
      <td dir="ltr">$ {crypto.total_supply.toFixed(2)} {crypto.symbol}</td>
      <td>{crypto.quote.USD.percent_change_24h.toFixed(2)} %</td>
      <td>{crypto.quote.USD.percent_change_7d.toFixed(2)} %</td>
      <DashboardTableCryptoChartCell>
        <ResponsiveContainer height={36}>
          {chartData.length
            ? (
              <AreaChart data={chartData} margin={{ top: 0, left: 0, bottom: 0 }}>
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  fill={chartColor}
                  stroke={chartColor}
                  fillOpacity={0.2}
                />
              </AreaChart>
              )
            : <DashboardTableNoDataText>{t('finance_dashboard.noData')}</DashboardTableNoDataText>}
        </ResponsiveContainer>
      </DashboardTableCryptoChartCell>
    </tr>
           
  );
};

TopTenRow.propTypes = {
  crypto: PropTypes.shape({
    quote: PropTypes.shape({
      USD: PropTypes.shape({
        market_cap: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        percent_change_24h: PropTypes.number.isRequired,
        volume_24h: PropTypes.number.isRequired,
        percent_change_7d: PropTypes.number.isRequired,
      }),
    }),
    percent_change_1h: PropTypes.number.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    total_supply: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  })),
};

TopTenRow.defaultProps = {
  chartData: [],
};

export default TopTenRow;

// region STYLES

const DashboardTableCryptoChartCell = styled.td`
  padding: 10px;
  width: 180px;
`;

const DashboardTableNoDataText = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// endregion
