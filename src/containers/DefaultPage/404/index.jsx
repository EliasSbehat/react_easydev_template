import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorWhite } from '@/utils/palette';
import { Button } from '@/shared/components/Button';

const NotFound404 = () => (
  <NotFoundContainer>
    <NotFountContent>
      <NotFoundImage src={`${process.env.PUBLIC_URL}/img/404/404.png`} alt="404" />
      <NotFoundInfo>
        Ooops! The page you are looking for could not be found :(
      </NotFoundInfo>
      <Button as={Link} variant="primary" to="/online_marketing_dashboard">Back Home</Button>
    </NotFountContent>
  </NotFoundContainer>
);

export default NotFound404;

// region STYLES

const NotFoundContainer = styled.div`
  text-align: center;
  height: 100vh;
  overflow: auto;
  display: flex;
  background: url(${process.env.PUBLIC_URL}/img/404/bg_404.jpeg) no-repeat center;
  background-size: cover;

  button {
    margin: 0;
  }
`;

const NotFountContent = styled.div`
  margin: auto;
  padding: 10px;
`;

const NotFoundImage = styled.img`
  max-width: 500px;
  width: 100%;
`;

const NotFoundInfo = styled.h3`
  color: ${colorWhite};
  margin-bottom: 20px;
  margin-top: 90px;
`;

// endregion
