import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [statusEntrega, setStatusEntrega] = useState('');
  const [quantidadeArrecadada, setQuantidadeArrecadada] = useState('');
  const [numeroContribuinte, setNumeroContribuinte] = useState('');

  function handleAlimento() {
    try {
      const response = axios.post('http://localhost:8080/api/v1/solicitacaoDoacao', {
        statusEntrega: statusEntrega,
        quantidadeArrecadada: quantidadeArrecadada,
        numeroContribuinte: numeroContribuinte,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setStatusEntrega('');
        setQuantidadeArrecadada('');
        setNumeroContribuinte('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleCreateControleDoacao() {
    navigation.navigate('Cadastrar');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Status" value={statusEntrega} onChangeText={setStatusEntrega} />
        <Input
          placeholder="Status"
          secureTextEntry={true}
          value={setStatusEntrega}
          onChangeText={setStatusEntrega}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Quantidade Arrecadada" value={quantidadeArrecadada} onChangeText={setQuantidadeArrecadada} />
        <Input
          placeholder="Quantidade Arrecadada"
          secureTextEntry={true}
          value={quantidadeArrecadada}
          onChangeText={setQuantidadeArrecadada}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Número Contribuinte" value={numeroContribuinte} onChangeText={setNumeroContribuinte} />
        <Input
          placeholder="Número Contribuinte"
          secureTextEntry={true}
          value={numeroContribuinte}
          onChangeText={setNumeroContribuinte}
        />
      </View>

      <Button title="Cadastro Número COntribuinte" onPress={handleCreateControleDoacao} />
    </View>
  );
}