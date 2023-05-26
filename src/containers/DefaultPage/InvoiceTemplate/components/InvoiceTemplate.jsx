import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import { Table } from '@/shared/components/TableElements';
import { colorAdditional, colorBackground, logoImg } from '@/utils/palette';
import {
  marginRight,
  marginLeft,
  left,
  right,
} from '@/utils/directions';

const invoiceData = [
  { title: 'Wordpress Plugin Apollo 200', quantity: 1, cost: 27 },
  { title: 'Easy Pro Admin Template', quantity: 1, cost: 59 },
  { title: 'Spirit HTML Template', quantity: 2, cost: 20 },
];

const InvoiceTemplate = () => (
  <Col md={12} lg={12}>
    <Card>
      <InvoiceCardBody>
        <InvoiceHead>
          <div>
            <InvoiceLogo />
            <p>Aspirity Creative Web Studio </p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago,</p>
            <p>IL 60185 </p>
            <p dir="ltr">+8 (224) 243-4543</p>
          </div>
          <InvoiceHeadRight>
            <h4>Invoice #2308</h4>
            <InvoiceDate>August 23, 2016</InvoiceDate>
            <p>Maria Morris</p>
            <p>Project Manager at BLX</p>
            <p>mariam@company.co</p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago, IL 60185</p>
          </InvoiceHeadRight>
        </InvoiceHead>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((item, index) => (
              <tr key={`index_${item.title}`}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.cost}</td>
                <td>${item.quantity * item.cost}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <InvoiceTotal>
          <Subtotal>Sub - Total amount: $126.00</Subtotal>
          <p>VAT: $20.00</p>
          <InvoiceGrandTotal>Grand Total: $146.00</InvoiceGrandTotal>
          <InvoiceToolbar>
            <Button variant="primary">Proceed to payment</Button>
            <Button variant="secondary">Print</Button>
          </InvoiceToolbar>
        </InvoiceTotal>
      </InvoiceCardBody>
    </Card>
  </Col>
);

export default InvoiceTemplate;

// region STYLES

const Subtotal = styled.p`
  margin-bottom: 10px;
`;

const InvoiceCardBody = styled(CardBody)`
  padding: 35px;
  text-align: ${left};
  background-color: ${colorBackground};
  
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

const InvoiceHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  flex-wrap: wrap;

  p {
    color: ${colorAdditional};
  }
`;

const InvoiceHeadRight = styled.div`
  width: 100%;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: auto;
    text-align: ${right};
    margin-top: 0;
  }
`;

const InvoiceDate = styled.p`
  margin-bottom: 10px;
`;

const InvoiceTotal = styled.div`
  text-align: ${right};
  margin-top: 15px;
`;

const InvoiceGrandTotal = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const InvoiceToolbar = styled(ButtonToolbar)`
  justify-content: flex-end;

  button {
    ${marginLeft}: 15px;
    ${marginRight}: 0;
  }
`;

const InvoiceLogo = styled.div`
  width: 120px;
  height: 16px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-size: contain;
  background-image: ${logoImg};
`;

// endregion
