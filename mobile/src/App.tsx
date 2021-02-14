import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Help Women</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF6FF',
  },
  containerText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#771454',
  },
});

export default App;
