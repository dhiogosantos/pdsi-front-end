import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Vehicles = () => {
  const navigation = useNavigation();

  // Dados estáticos de veículos (mesma coisa que no de motorista, só por enquanto, ai depois cada user terá vehiculos vinculados a ele)
  // Inicialmente estará vazio, depois será preenchido com os dados do veículo passado pelo usuário
  const vehiclesData = [
    {
      id: 1,
      automaker: 'Renault',
      model: 'Sandero',
      year: 2020,
      color: 'Cinza',
    },
    {
      id: 2,
      automaker: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'Preto',
    },
  ];

  //Renderizando interface do usuário
  return (
    <View style={styles.container}>
      <ScrollView>
        {vehiclesData.map((vehicle) => ( //Mapeamento dos dados dos veículos (id, automaker, model, year, color)

          //Container de cada veículo que será exibido na tela
          <View key={vehicle.id} style={styles.vehicleContainer}>
            <Text style={styles.vehicleTitle}>Vehicle {vehicle.id}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Automaker</Text>
              <Text style={styles.value}>{vehicle.automaker}</Text>
              <Text style={styles.label}>Year</Text>
              <Text style={styles.value}>{vehicle.year}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Model</Text>
              <Text style={styles.value}>{vehicle.model}</Text>
              <Text style={styles.label}>Color</Text>
              <Text style={styles.value}>{vehicle.color}</Text>
            </View>
            <TouchableOpacity
              style={styles.maintenanceButton}
              onPress={() => navigation.navigate('Maintenance', { vehicleId: vehicle.id })}
            >
              <Text style={styles.maintenanceButtonText}>Maintenances</Text> {/* Botão para ver as manutenções do veíuclo */}
            </TouchableOpacity>
          </View>
        ))}
        
        {/* Botão para adicionar veículo (vai direcionar para uma tela nova, que esta será um formulário para cadastro de um novo veículo) */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Vehicle</Text>
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
  vehicleContainer: {
    backgroundColor: '#71B5E3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  vehicleTitle: {
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
});

export default Vehicles;
