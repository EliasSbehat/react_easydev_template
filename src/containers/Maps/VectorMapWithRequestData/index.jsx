import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import Map from './components/Map';
import { fetchCovidData } from './redux/actions';

const VectorMapWithRequestData = () => {
  const { t } = useTranslation('common');

  const covidData = useSelector(state => state.covid.data);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('maps.vector_map.with_api_request')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <Map
          mapData={covidData}
        />
      </Row>
    </Container>
  );
};

export default VectorMapWithRequestData;
