import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person-circle-outline" size={40} color="white" />
        <TouchableOpacity>
          <Icon name="notifications-off-outline" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Driver')}>
        <Icon name="person-outline" size={40} color="black" />
        <Text style={styles.cardText}>Driver</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Vehicles')}>
        <Icon name="car-outline" size={40} color="black" />
        <Text style={styles.cardText}>Vehicles</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Trips')}>
        <Icon name="map-outline" size={40} color="black" />
        <Text style={styles.cardText}>Trips</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001421',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#71B5E3',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
});

export default HomeScreen;
