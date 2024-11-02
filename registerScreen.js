import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Register:', username, email, cpf, password);
        navigation.navigate('Login'); // Redireciona para a tela de login após o cadastro
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF (only numbers)"
                value={cpf}
                onChangeText={setCpf}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Register" onPress={handleRegister} color="#75b6d6" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001321',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

export default RegisterScreen;