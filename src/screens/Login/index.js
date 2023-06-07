import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleLogin() {
    try {
      const response = axios.post('http://localhost:8080/api/login--', {
        login: login,
        nome: nome,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento,
        telefone: telefone,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Login realizado!');
        setLogin('');
        setEmail('');
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
        <Input placeholder="Login" value={login} onChangeText={setLogin} />
        <Input
          placeholder="Login"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Email"
          secureTextEntry={true}
          value={email}
          onChangeText={setEmail}
        />
        <Input placeholder="Senha" value={senha} onChangeText={setSenha} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <Input placeholder="Nascimento" value={nascimento} onChangeText={setNascimento} />
        <Input
          placeholder="Nascimento"
          secureTextEntry={true}
          value={nascimento}
          onChangeText={setNascimento}
        />
        <Input placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
        <Input
          placeholder="Telefone"
          secureTextEntry={true}
          value={telefone}
          onChangeText={setTelefone}
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