import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Trips = () => {
  const navigation = useNavigation(); //hook de navegação para navegar entre telas (drivers license e tickets)

  // Dados estáticos de viagens
  const tripsData = [
    {
      id: 1,
      name: 'Brasilia',
      autoUsed: 'Civic',
      travelDate: '10/10/2024',
      travelTime: '5:40hr',
      travelDistance: '800km',
    },
    {
      id: 2,
      name: 'Rio de Janeiro',
      autoUsed: 'Civic',
      travelDate: '19/02/2023',
      travelTime: '10:00hr',
      travelDistance: '1000km',
    },
    {
      id: 3,
      name: 'Rio Preto',
      autoUsed: 'Sandero',
      travelDate: '24/06/2024',
      travelTime: '4:30hr',
      travelDistance: '376km',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {tripsData.map((trip) => ( //Mapeamento dos dados das viagens
          <View key={trip.id} style={styles.tripContainer}>
            <Text style={styles.tripTitle}>Trip "{trip.name}"</Text>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Auto used</Text>
              <Text style={styles.value}>{trip.autoUsed}</Text>
              <Text style={styles.label}>Travel Date</Text>
              <Text style={styles.value}>{trip.travelDate}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Travel Time</Text>
              <Text style={styles.value}>{trip.travelTime}</Text>
              <Text style={styles.label}>Travel Distance</Text>
              <Text style={styles.value}>{trip.travelDistance}</Text>
            </View>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate('TripDetails', { tripId: trip.id })}
            >
              <Text style={styles.detailsButtonText}>Details</Text> {/* Botao para ver os detalhes da viagem */}
            </TouchableOpacity>
          </View>
        ))}

        {/* Botao para adicionar uma nova viagem */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Trip</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001421',
    padding: 20,
  },
  tripContainer: {
    backgroundColor: '#71B5E3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  tripTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001421',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#001421',
  },
  value: {
    color: '#001421',
    fontSize: 16,
  },
  detailsButton: {
    backgroundColor: '#001421',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#71B5E3',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#001421',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#71B5E3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Trips;
