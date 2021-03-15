import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  Container,
  LogoBackground,
  Header,
  HeaderTitle,
  Footer,
  ButtonFooter,
  ButtonTextFooter,
} from './styles';

import logoBackgroundImage from '../../assets/backgroundLogo/logo.png';

import iconVolumeUp from '../../assets/volumeUp/volume_up.png';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToPageSOS = useCallback(() => {
    navigate('SOS');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Help Women</HeaderTitle>
      </Header>

      <LogoBackground
        source={logoBackgroundImage}
        imageStyle={{ resizeMode: 'stretch' }}
      >
        <Footer>
          <Image source={iconVolumeUp} />

          <ButtonFooter onPress={navigateToPageSOS}>
            <ButtonTextFooter> PEDIR SOCORRO </ButtonTextFooter>
          </ButtonFooter>
        </Footer>
      </LogoBackground>
    </Container>
  );
};

export default Home;
