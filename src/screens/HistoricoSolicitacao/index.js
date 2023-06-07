import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [nomeOrganizacao, setNomeOrganizacao] = useState('');
  const [siglaEstado, setEmail] = useState('');
  const [nomeCidadeOrigem, setSenha] = useState('');
  const [enderecoOrigem, setNascimento] = useState('');
  const [siglaEstadoDestino, setSiglaEstadoDestino] = useState('');
  const [nomeCidadeDestino, setNomeCidadeDestino] = useState('');
  const [enderecoCidadeDestino, setEnderecoCidadeDestino] = useState('');
  const [nomeAlimento, setNomeAlimento] = useState('');
  const [quantidadeAlimento, setQuantidadeAlimento] = useState('');
  const [statusEntrega, setStatusEntrega] = useState('');

  function handleSolicitacaoDoacao() {
    try {
      const response = axios.post('http://localhost:8080/api/v1/solicitacaoDoacao', {
        nomeOrganizacao: nomeOrganizacao,
        siglaEstado: siglaEstado,
        nomeCidadeOrigem: nomeCidadeOrigem,
        enderecoOrigem: enderecoOrigem,
        siglaEstadoDestino: siglaEstadoDestino,
        nomeCidadeDestino: nomeCidadeDestino,
        enderecoCidadeDestino: enderecoCidadeDestino,
        nomeAlimento: nomeAlimento,
        quantidadeAlimento: quantidadeAlimento,
        statusEntrega: statusEntrega,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeOrganizacao('');
        setSiglaEstadoDestino('');
        setNomeCidadeDestino('');
        setEnderecoCidadeDestino('');
        setNomeAlimento('');
        setQuantidadeAlimento('');
        setStatusEntrega('');
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
        <Input placeholder="Nome Organização" value={nomeOrganizacao} onChangeText={setNomeOrganizacao} />
        <Input
          placeholder="Nome Organização"
          secureTextEntry={true}
          value={nomeOrganizacao}
          onChangeText={setNomeOrganizacao}
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