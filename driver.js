//Importando bibliotecas
import React from 'react'; //bibliotecas do React
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; //Componentes do react-native
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; //Ícones
import { useNavigation } from '@react-navigation/native'; //hook de navegação do React (permite navegar entre telas)

const DriverInfo = () => {
  const navigation = useNavigation(); //hook de navegação para navegar entre telas (drivers license e tickets)

  //Dados do motorista (estáticos, mas o objetivo depois é se atualizarem com base nos dados de login)
  const driverData = {
    name: 'Fulano da Silva',
    gender: 'Masculino',
    cpf: '000.000.000-00',
    emissionDate: '14/10/2023',
    expiredDate: '14/10/2033',
    category: 'B',
  };

  //Renderização da Interface
  return (
    <View style={styles.container}>

      {/* Header com título e ícone de edição */}
      <View style={styles.header}>
        <Text style={styles.title}>Driver info</Text>
        <Icon name="account-edit" size={30} color="#FF4D4D" style={styles.editIcon} />
      </View>

      {/* Container para display das infos do motorista */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{driverData.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{driverData.gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>CPF</Text>
          <Text style={styles.value}>{driverData.cpf}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>{driverData.category}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Emission date</Text>
          <Text style={styles.value}>{driverData.emissionDate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Expired date</Text>
          <Text style={styles.value}>{driverData.expiredDate}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>

        {/* Botão para navegar para a tela da carteira do motorista */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DriversLicense')}
        >
          <Icon name="card-account-details" size={30} color="#001421" />
          <Text style={styles.buttonText}>Driver's License</Text>
        </TouchableOpacity>

        {/* Botão para navegar para a tela de tickets */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tickets')}
        >
          <Icon name="file-document" size={30} color="#001421" />
          <Text style={styles.buttonText}>Ticket's</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#71B5E3',
  },
  editIcon: {
    alignSelf: 'center',
  },
  infoContainer: {
    backgroundColor: '#71B5E3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
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
    fontSize: 16,
    color: '#001421',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#71B5E3',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#001421',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default DriverInfo;
