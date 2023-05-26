import React from 'react';
import { useTranslation } from 'react-i18next';
import Badge from '@/shared/components/Badge';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';
import BasicTableData from './BasicTableData';

const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('tables.basic_tables.responsive_table')}</CardTitle>
            <CardSubhead>Use default table with property <span className="red-text">responsive</span></CardSubhead>
          </CardTitleWrap>
          <Table responsive bordered>
            <thead>
              <tr>
                {tableHeaderResponsiveData.map(item => (
                  <th key={item.id}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first}</td>
                  <td>{item.last}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.date}</td>
                  <td>{item.location}</td>
                  <td><Badge bg={item.status_resp}>{item.badge_resp}</Badge></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ResponsiveTable;
