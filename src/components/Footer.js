import React from 'react';
import {Container, Footer} from 'react-bulma-components';
import {FacebookProvider, Like} from 'react-facebook';

export default () => (
  <Footer>
    <Container>
      <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
        {/*
          Attribute href should come from
          window.location.href or .origin,
          but it does not render the buttons
          on localhost. So...
        */}
        <Like href='http://kamelrechner.eu/en' colorScheme='dark' />
      </FacebookProvider>
    </Container>
  </Footer>
);
