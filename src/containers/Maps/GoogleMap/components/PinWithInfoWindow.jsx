import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  GoogleMap, useJsApiLoader, Marker, InfoWindow,
} from '@react-google-maps/api';
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

const PinWithInfoWindow = () => {
  const { t } = useTranslation('common');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
  });

  const [isOpened, setIsOpened] = useState(true);

  const onToggleIsOpen = () => {
    setIsOpened(!isOpened);
  };

  const onLoad = (infoWindow) => {
    console.log('infoWindow: ', infoWindow);
  };

  return (
    <Col xs={12} md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('maps.google_map.pin_with_info_window')}</CardTitle>
          </CardTitleWrap>
          {isLoaded && (
            <GoogleMap
              id="infoWindowMap"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <Marker position={center} onClick={onToggleIsOpen}>
                {!isOpened && (
                  <InfoWindow
                    onLoad={onLoad}
                    options={{ closeBoxURL: '', enableEventPropagation: true }}
                  >
                    <MapMarkerContent>
                      DRAKARYS!!!
                    </MapMarkerContent>
                  </InfoWindow>
                )}
              </Marker>
            </GoogleMap>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PinWithInfoWindow;

// region STYLES

const MapMarkerContent = styled.div`
  font-size: 12px;
  width: 130px;
  min-height: 40px;
  position: relative;
`;

// endregion
