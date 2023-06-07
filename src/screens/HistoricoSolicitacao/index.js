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

  function handleHistoricoSolicitacao() {
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
        <Input placeholder="Sigla Estado" value={siglaEstadoDestino} onChangeText={setSiglaEstadoDestino} />
        <Input
          placeholder="Sigla Estado"
          secureTextEntry={true}
          value={siglaEstadoDestino}
          onChangeText={setSiglaEstadoDestino}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Nome cidade destino" value={nomeCidadeDestino} onChangeText={setNomeCidadeDestino} />
        <Input
          placeholder="Nome Cidade Destino"
          secureTextEntry={true}
          value={nomeCidadeDestino}
          onChangeText={setNomeCidadeDestino}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Endereço Cidade Destino" value={enderecoCidadeDestino} onChangeText={setEnderecoCidadeDestino} />
        <Input
          placeholder="Endereço Cidade Destino"
          secureTextEntry={true}
          value={enderecoCidadeDestino}
          onChangeText={setEnderecoCidadeDestino}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Nome Alimento" value={nomeAlimento} onChangeText={setNomeAlimento} />
        <Input
          placeholder="Nome Alimento"
          secureTextEntry={true}
          value={nomeAlimento}
          onChangeText={setNomeAlimento}
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
      <View style={styles.inputContainer}>
        <Input placeholder="Status Entrega" value={statusEntrega} onChangeText={setStatusEntrega} />
        <Input
          placeholder="Status Entrega"
          secureTextEntry={true}
          value={statusEntrega}
          onChangeText={setStatusEntrega}
        />
      </View>
      

      <Button title="Histórico Solicitação" onPress={handleHistoricoSolicitacao} />
    </View>
  );
}