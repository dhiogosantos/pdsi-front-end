// AddVehicle.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const AddVehicle = ({ navigation }) => {
  // Definindo estados para cada campo
  const [plate, setPlate] = useState('');
  const [chassis, setChassis] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [maker, setMaker] = useState('');
  const [model, setModel] = useState('');
  const [km, setKm] = useState('');

  const handleAddVehicle = () => {
    // (adicionar o cód para enviar para o banco de dados)
    console.log({ plate, chassis, year, color, maker, model, km });

    const requestJson = JSON.stringify({
        //userId: userId, //Pegar o id do usuário logado
        plate: plate,
        chassis: chassis,
        year: year,
        color: color,
        maker: maker,
        model: model,
        km: km,
    });

    try {
        fetch('http://localhost:8080/vehicle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestJson,
        });

        console.log('Success');
        navigation.goBack(); //Volta para a tela de veiculos
    }
    catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Plate</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter plate"
        value={plate}
        onChangeText={setPlate}
      />
      
      <Text style={styles.label}>Chassis</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter chassis"
        value={chassis}
        onChangeText={setChassis}
      />

      <Text style={styles.label}>Year</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Color</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter color"
        value={color}
        onChangeText={setColor}
      />

      <Text style={styles.label}>Maker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter maker"
        value={maker}
        onChangeText={setMaker}
      />

      <Text style={styles.label}>Model</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter model"
        value={model}
        onChangeText={setModel}
      />

      <Text style={styles.label}>Km</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter kilometers"
        value={km}
        onChangeText={setKm}
        keyboardType="numeric"
      />

      <Button title="Add Vehicle" onPress={handleAddVehicle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#001321',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default AddVehicle;
