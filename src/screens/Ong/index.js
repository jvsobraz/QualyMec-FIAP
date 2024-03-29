import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ navigation }) {
  const [nomeOrganizacao, setNomeOrganizacao] = useState('');
  const [emailResponsavel, setEmailResponsavel] = useState('');
  const [senha, setSenha] = useState('');
  const [telefoneResponsavel, setTelefoneResponsavel] = useState('');
  const [siglaEstado, setsiglaEstado] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [nomeCidade, setNomeCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');

  function handleInstituto() {
    try {
      const response = axios.post('http://localhost:8080/api/v1/instituto', {
        nomeOrganizacao: nomeOrganizacao,
        emailResponsavel: emailResponsavel,
        senha: senha,
        telefoneResponsavel: telefoneResponsavel,
        siglaEstado: siglaEstado,
        numeroDocumento: numeroDocumento,
        nomeCidade: nomeCidade,
        endereco: endereco,
        tipoDocumento: tipoDocumento,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeOrganizacao('');
        setEmailResponsavel('');
        setSenha('');
        setTelefoneResponsavel('');
        setSiglaEstado('');
        setNumeroDocumento('');
        setNomeCidade('');
        setEndereco('');
        setTipoDocumento('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleInstituto() {
    try {
      const response = axios.delete('http://localhost:8080/api/v1/instituto/{id}', {
        nomeOrganizacao: nomeOrganizacao,
        emailResponsavel: emailResponsavel,
        senha: senha,
        telefoneResponsavel: telefoneResponsavel,
        siglaEstado: siglaEstado,
        numeroDocumento: numeroDocumento,
        nomeCidade: nomeCidade,
        endereco: endereco,
        tipoDocumento: tipoDocumento,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeOrganizacao('');
        setEmailResponsavel('');
        setSenha('');
        setTelefoneResponsavel('');
        setSiglaEstado('');
        setNumeroDocumento('');
        setNomeCidade('');
        setEndereco('');
        setTipoDocumento('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleInstituto() {
    try {
      const response = axios.put('http://localhost:8080/api/v1/instituto/{id}', {
        nomeOrganizacao: nomeOrganizacao,
        emailResponsavel: emailResponsavel,
        senha: senha,
        telefoneResponsavel: telefoneResponsavel,
        siglaEstado: siglaEstado,
        numeroDocumento: numeroDocumento,
        nomeCidade: nomeCidade,
        endereco: endereco,
        tipoDocumento: tipoDocumento,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeOrganizacao('');
        setEmailResponsavel('');
        setSenha('');
        setTelefoneResponsavel('');
        setSiglaEstado('');
        setNumeroDocumento('');
        setNomeCidade('');
        setEndereco('');
        setTipoDocumento('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleInstituto() {
    try {
      const response = axios.get('http://localhost:8080/api/v1/instituto', {
        nomeOrganizacao: nomeOrganizacao,
        emailResponsavel: emailResponsavel,
        senha: senha,
        telefoneResponsavel: telefoneResponsavel,
        siglaEstado: siglaEstado,
        numeroDocumento: numeroDocumento,
        nomeCidade: nomeCidade,
        endereco: endereco,
        tipoDocumento: tipoDocumento,
  
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso');
        setNomeOrganizacao('');
        setEmailResponsavel('');
        setSenha('');
        setTelefoneResponsavel('');
        setSiglaEstado('');
        setNumeroDocumento('');
        setNomeCidade('');
        setEndereco('');
        setTipoDocumento('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
      );
    }
  }

  function handleCreateInstituto() {
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
      

      <Button title="Cadastro Instituto" onPress={handleCreateInstituto} />
    </View>
  );
}