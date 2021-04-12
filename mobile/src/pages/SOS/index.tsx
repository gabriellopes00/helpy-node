import React, { useEffect, useState, useCallback } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';

// eslint-disable-next-line import/no-unresolved
import { APP_MAPBOX_KEY } from '@env';

import api from '../../services/api';

import {
  Container,
  UserPositionMarkup,
  UserPositionMarkupCenter,
  ContainerButtonSOS,
  ButtonSOS,
  ButtonSOSTitle,
} from './styles';

MapboxGL.setAccessToken(APP_MAPBOX_KEY);

interface UserLocationProps {
  latitude: number;
  longitude: number;
}

const SOS: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<UserLocationProps>({
    latitude: 0,
    longitude: 0,
  });

  const userRequestSOS = useCallback(async () => {
    try {
      const { latitude, longitude } = userLocation;

      setLoading(true);

      await api.post('/help-request', {
        latitude,
        longitude,
      });

      setLoading(false);

      Alert.alert('Sucesso', 'O socorro está a caminho!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu algo de errado, tente novamente.');
    }
  }, [userLocation]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => Alert.alert('Erro', error.message),
      {
        enableHighAccuracy: false,
        timeout: 120000,
        maximumAge: 1000,
      },
    );
  }, [userLocation]);

  return (
    <Container>
      <View style={{ flex: 1, height: '100%', width: '100%' }}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Street}
          style={{ flex: 1 }}
        >
          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[userLocation.longitude, userLocation.latitude]}
            animationMode="flyTo"
            animationDuration={0}
          />
          <MapboxGL.PointAnnotation
            id="userLocation"
            coordinate={[userLocation.longitude, userLocation.latitude]}
          >
            <UserPositionMarkup>
              <UserPositionMarkupCenter />
            </UserPositionMarkup>
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      </View>

      <ContainerButtonSOS>
        {!loading ? (
          <ButtonSOS onPress={userRequestSOS}>
            <ButtonSOSTitle>SOS</ButtonSOSTitle>
          </ButtonSOS>
        ) : (
          <ActivityIndicator size="large" color="#fff" />
        )}
      </ContainerButtonSOS>
    </Container>
  );
};

export default SOS;
