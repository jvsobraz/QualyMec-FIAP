import React, { useState } from 'react';
import { View, Text, Alert  } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleCadastro() {
    try {
      const response = axios.post('http://localhost:8080/api/cadastrar', {
        nome,
        email,
        senha,
        dataNascimento,
        telefone,
      });
      console.log(response)

      if (response.status === 201){
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setDataNascimento('');
        setTelefone('');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="CADASTRAR" />
      <View style={styles.center}>
      <Text style={styles.subtitle}>Informe seus dados para complementar o cadastro.</Text>
      <Input
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <View>
      <Input
        placeholder="Telefone"
        secureTextEntry={true}
        value={telefone}
        onChangeText={setTelefone}
      />
      </View>
      <Button title="ENVIAR" onPress={handleCadastro} />
    </View>
  );
};