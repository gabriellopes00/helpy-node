import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SOS');
        }}
      >
        <Text style={{ color: '#000' }}>Home</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
