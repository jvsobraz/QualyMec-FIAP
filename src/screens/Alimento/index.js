import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [nomeAlimento, setNomeAlimento] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [quantidadeAlimento, setQuantidadeAlimento] = useState('');

  function handleLogin() {
    try {
      const response = axios.post('http://localhost:8080/api/v1/alimentoDoado', {
        email: login,
        senha: senha,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Login realizado!');
        setLogin('');
        setSenha('');
        setNascimento('');
        setTelefone('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível realizar o login. Verifique suas credenciais.'
      );
    }
  }

  function handleCreateAccount() {
    navigation.navigate('Cadastrar');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" value={login} onChangeText={setLogin} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <TouchableOpacity
        style={styles.createAccountText}
        onPress={handleCreateAccount}>
        <Text>Já possui conta?</Text>
      </TouchableOpacity>

      <Button title="LOGIN" onPress={handleLogin} />
    </View>
  );
}