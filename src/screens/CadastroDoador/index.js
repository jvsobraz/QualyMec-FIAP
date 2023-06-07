import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AdicionarDoador = () => {
  const [nomeDoador, setNomeDoador] = useState('');
  const [emailDoador, setEmailDoador] = useState('');
  const [senhaDoador, setSenhaDoador] = useState('');
  const [endereco, setEndereco] = useState('');
  const [endereco, setEndereco] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleAdicionarDoador = () => {
    const novoDoador = {
      NomeDoador: nomeDoador,
      endereco: endereco,
    };

    axios.post('http://localhost:8080/api/v1/doador', novoDoador)
      .then(response => {
        console.log('Doador adicionado com sucesso');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do Doador"
        value={nomeDoador}
        onChangeText={text => setNomeDoador(text)}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={text => setEndereco(text)}
      />
      <Button title="Adicionar Doador" onPress={handleAdicionarDoador} />
    </View>
  );
};

export default AdicionarDoadorScreen;
