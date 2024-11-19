import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from './UserContext';

const Vehicles = () => {
  const navigation = useNavigation();
  const { userId } = useUser();
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    const fetchVehiclesData = async () => {
      try {
        const response = await fetch('http://localhost:8080/vehicle/getAll/' + userId);
        const result = await response.json();
        if (result.success) {
          setVehiclesData(result.data);
        } else {
          console.error('Error fetching vehicles data:', result.message);
        }
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      }
    };

    fetchVehiclesData();
  }, []);

  const removeVehicle = (plate) => {
    setVehiclesData(vehiclesData.filter(vehicle => vehicle.plate !== plate));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {vehiclesData.map((vehicle) => (
          <View key={vehicle.plate} style={styles.vehicleContainer}>
            <Text style={styles.vehicleTitle}>Vehicle {vehicle.plate}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Automaker</Text>
              <Text style={styles.value}>{vehicle.maker}</Text>
              <Text style={styles.labelRight}>Year</Text>
              <Text style={styles.valueRight}>{vehicle.year}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Model</Text>
              <Text style={styles.value}>{vehicle.model}</Text>
              <Text style={styles.labelRight}>Color</Text>
              <Text style={styles.valueRight}>{vehicle.color}</Text>
            </View>
            <TouchableOpacity
              style={styles.maintenanceButton}
              onPress={() => navigation.navigate('Maintenance', { vehicleId: vehicle.id })}
            >
              <Text style={styles.maintenanceButtonText}>Maintenances</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeVehicle(vehicle.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddVehicle')}>
          <Text style={styles.addButtonText}>+ Add Vehicle</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#001421',
  },
  vehicleContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#71B5E3',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  value: {
    color: '#555',
    flex: 1,
  },
  labelRight: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  valueRight: {
    color: '#555',
    flex: 1,
    textAlign: 'right',
  },
  maintenanceButton: {
    backgroundColor: '#001421',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  maintenanceButtonText: {
    color: '#71B5E3',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#71B5E3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#001421',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#001421',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Vehicles;