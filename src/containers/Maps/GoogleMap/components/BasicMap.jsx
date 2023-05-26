import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 56.009483,
  lng: 92.8121694,
};

const BasicMap = () => {
  const { t } = useTranslation('common');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
  });

  return (
    <Col xs={12} md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('maps.google_map.basic_map')}</CardTitle>
          </CardTitleWrap>
          {isLoaded && (
            <GoogleMap
              id="basicMap"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicMap;
