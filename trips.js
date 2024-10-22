import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Trips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
});

export default Trips;
