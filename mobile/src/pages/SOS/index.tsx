import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const SOS: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text>SOS</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SOS;
