import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Container, styles } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 41.14961,
            longitude: -8.61099,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{
              latitude: 41.14961,
              longitude: -8.61099,
            }}
            title="Você está aqui"
            description="Veja o que está acontecendo ao redor"
            icon={{
              uri: 'https://img.icons8.com/color/3x/place-marker--v1.png',
            }}
          />
        </MapView>
      </Container>
    </>
  );
};

export default Home;
