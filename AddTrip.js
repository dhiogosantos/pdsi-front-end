import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useUser } from './UserContext'; // Supondo que o ID do usuário está no contexto

const AddTrip = ({ navigation }) => {
  const user = useUser(); // Acessa o ID do usuário, se necessário

  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState('');
  const [data, setData] = useState('');
  const [tempo, setTempo] = useState('');

  const handleAddTrip = () => {
    const tripData = {
      //userId: user.id, // ID do usuário (opcional, caso necessário para identificar o usuário)
      destino,
      distancia: parseFloat(distancia), // Converte para número
      data,
      tempo,
    };

    console.log(tripData); // Aqui você enviaria tripData para o backend
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Destino</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o destino"
        value={destino}
        onChangeText={setDestino}
      />

      <Text style={styles.label}>Distância (em km)</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a distância"
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />

      <Text style={styles.label}>Data (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a data"
        value={data}
        onChangeText={setData}
      />

      <Text style={styles.label}>Tempo (HH:MM:SS)</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o tempo"
        value={tempo}
        onChangeText={setTempo}
      />

      <Button title="Add Trip" onPress={handleAddTrip} />
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

export default AddTrip;
