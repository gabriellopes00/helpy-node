import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const LogoBackground = styled.ImageBackground`
  width: 100%;
  height: 464px;
  justify-content: flex-end;
`;

export const Header = styled.View`
  width: 100%;
  padding-left: 32px;
  padding-top: 32px;
`;
export const HeaderTitle = styled.Text`
  width: 218px;
  font-size: 64px;
  color: #771454;
  font-family: 'Roboto-Bold';
`;

export const Footer = styled.View`
  width: 100%;
  height: 244px;
  justify-content: center;
  align-items: center;
  background: #771454;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
`;

export const ButtonFooter = styled(RectButton)`
  width: 295px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #29a85b;
  margin-top: 32px;
`;

export const ButtonTextFooter = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 18px;
  color: #fff;
`;
