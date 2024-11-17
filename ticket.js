import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Ticket = () => {
  const tickets = [
    { id: '1', description: 'Excesso de velocidade', date: '10/10/2024', amount: 'R$ 150,00' },
    { id: '2', description: 'Estacionamento em local proibido', date: '05/09/2024', amount: 'R$ 120,00' },
    { id: '3', description: 'Avanço de sinal vermelho', date: '20/08/2024', amount: 'R$ 200,00' },
  ];

  const renderTicket = ({ item }) => (
    <View style={styles.ticketCard}>
      <View style={styles.ticketInfo}>
        <Text style={styles.ticketDescription}>{item.description}</Text>
        <Text style={styles.ticketDetails}>Data: {item.date}</Text>
        <Text style={styles.ticketDetails}>Valor: {item.amount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tickets}
        keyExtractor={item => item.id}
        renderItem={renderTicket}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001321', // Cor de fundo escura
    padding: 10,
  },
  ticketCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#75b6d6', // Cor de fundo dos cards
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  ticketInfo: {
    flex: 1,
  },
  ticketDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001321',
  },
  ticketDetails: {
    fontSize: 14,
    color: '#001321',
    marginTop: 5,
  },
});

export default Ticket;
