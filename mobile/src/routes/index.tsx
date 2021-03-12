import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SOS from '../pages/SOS';
import Home from '../pages/Home';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FDF6FF' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="SOS" component={SOS} />
  </App.Navigator>
);

export default Routes;
