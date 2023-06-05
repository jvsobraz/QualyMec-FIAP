import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AdicionarDoador = () => {
  const [nomeDoador, setNomeDoador] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleAdicionarDoador = () => {
    const newDonor = {
      NomeDoador: nomeDoador,
      endereco: endereco,
    };

    axios.post('/api/v1/Doador', newDonor)
      .then(response => {
        console.log('Donor added successfully');
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
