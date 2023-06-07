import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [nomeAlimento, setNomeAlimento] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [quantidadeAlimento, setQuantidadeAlimento] = useState('');

  function handleAlimento() {
    try {
      const response = axios.post('http://localhost:8080/api/v1/alimentoDoado', {
        nomeAlimento: nomeAlimento,
        dataFabricacao: dataFabricacao,
        dataValidade: dataValidade,
        quantidadeAlimento: quantidadeAlimento,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeAlimento('');
        setDataFabricacao('');
        setDataValidade('');
        setQuantidadeAlimento('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleCreateAlimento() {
    navigation.navigate('Cadastrar');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Nome" value={nomeAlimento} onChangeText={setNomeAlimento} />
        <Input
          placeholder="Nome do Alimento"
          secureTextEntry={true}
          value={nomeAlimento}
          onChangeText={setNomeAlimento}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Data de Fabricação" value={dataFabricacao} onChangeText={setDataFabricacao} />
        <Input
          placeholder="Data de Fabricação"
          secureTextEntry={true}
          value={dataFabricacao}
          onChangeText={setDataFabricacao}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Validade" value={dataValidade} onChangeText={setDataValidade} />
        <Input
          placeholder="Validade"
          secureTextEntry={true}
          value={dataValidade}
          onChangeText={setDataValidade}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Quantidade Alimento" value={quantidadeAlimento} onChangeText={setQuantidadeAlimento} />
        <Input
          placeholder="Quantidade Alimento"
          secureTextEntry={true}
          value={quantidadeAlimento}
          onChangeText={setQuantidadeAlimento}
        />
      </View>

      <Button title="Cadastro Alimento" onPress={handleCreateAlimento} />
    </View>
  );
}