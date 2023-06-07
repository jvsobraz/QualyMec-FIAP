import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleDoador() {
    try {
      const response = axios.post('http://localhost:8080/api/v1/doador', {
        nomeCompleto: nomeCompleto,
        email: email,
        senha: senha,
        nascimento: nascimento,
        telefone: telefone,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeCompleto('');
        setEmail('');
        setSenha('');
        setNascimento('');
        setTelefone('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleDoador() {
    try {
      const response = axios.delete('http://localhost:8080/api/v1/doador/{id}', {
        nomeCompleto: nomeCompleto,
        email: email,
        senha: senha,
        nascimento: nascimento,
        telefone: telefone,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeCompleto('');
        setEmail('');
        setSenha('');
        setNascimento('');
        setTelefone('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleDoador() {
    try {
      const response = axios.put('http://localhost:8080/api/v1/doador/{id}', {
        nomeCompleto: nomeCompleto,
        email: email,
        senha: senha,
        nascimento: nascimento,
        telefone: telefone,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeCompleto('');
        setEmail('');
        setSenha('');
        setNascimento('');
        setTelefone('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleDoador() {
    try {
      const response = axios.get('http://localhost:8080/api/v1/doador', {
        nomeCompleto: nomeCompleto,
        email: email,
        senha: senha,
        nascimento: nascimento,
        telefone: telefone,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeCompleto('');
        setEmail('');
        setSenha('');
        setNascimento('');
        setTelefone('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleCreateDoador() {
    navigation.navigate('Cadastrar');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Nome" value={nomeCompleto} onChangeText={setNomeCompleto} />
        <Input
          placeholder="Nome"
          secureTextEntry={true}
          value={NomeCompleto}
          onChangeText={setNomeCompleto}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Email"
          secureTextEntry={true}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Senha" value={senha} onChangeText={setSenha} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Nascimento" value={nascimento} onChangeText={setNascimento} />
        <Input
          placeholder="Nascimento"
          secureTextEntry={true}
          value={nascimento}
          onChangeText={setNascimento}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
        <Input
          placeholder="Telefone"
          secureTextEntry={true}
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>
      

      <Button title="Cadastro Doador" onPress={handleCreateDoador} />
    </View>
  );
}