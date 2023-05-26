import React from 'react';
import { Col } from 'react-bootstrap';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
 FormContainer, FormGroup, FormGroupField, FormGroupIcon, 
} from '@/shared/components/form/FormElements';
import SearchResult from './SearchResult';
import results from './results';

const SearchHere = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Search here</CardTitle>
        </CardTitleWrap>
        <FormContainer>
          <FormGroup>
            <FormGroupField>
              <input name="search" type="text" placeholder="Search..." defaultValue="Invoice template" />
              <FormGroupIcon>
                <MagnifyIcon />
              </FormGroupIcon>
            </FormGroupField>
          </FormGroup>
        </FormContainer>
        <h4 className="typography-message">{'Search result for \'Invoice template\''}</h4>
        <h4 className="subhead typography-message">Found 18 results</h4>
        <div>
          {results.slice(0, 10).map(result => (
            <SearchResult
              key={result.id}
              title={result.title}
              link={`${process.env.PUBLIC_URL}/default_pages/invoice_template`}
              preview={result.preview}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default SearchHere;
