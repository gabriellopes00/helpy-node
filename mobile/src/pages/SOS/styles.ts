import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContainerButtonSOS = styled.View`
  width: 115px;
  height: 115px;
  background-color: rgba(255, 122, 0, 0.2);
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  z-index: 2;
  border-radius: 57.5px;
`;

export const ButtonSOS = styled(RectButton)`
  width: 100px;
  height: 100px;
  background: #ff7a00;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
`;

export const ButtonSOSTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 36px;
  color: #fff;
`;

export const UserPositionMarkup = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: rgba(246, 60, 60, 0.2);
  border-radius: 15px;
`;

export const UserPositionMarkupCenter = styled.View`
  width: 15px;
  height: 15px;
  background: #f63c3c;
  border-radius: 7.5px;
`;
