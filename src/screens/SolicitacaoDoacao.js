import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const SolicitacaoDoacao = () => {
  const [doadorId, setDoadorId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleRequestDonation = () => {
    const newRequest = {
      doadorId: doadorId,
      mensagem: mensagem,
    };

    axios.post('/api/v1/SolicitacaoDoacao', newRequest)
      .then(response => {
        console.log('Donation request sent successfully');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Doador ID"
        value={doadorId}
        onChangeText={text => setDoadorId(text)}
      />
      <TextInput
        placeholder="Mensagem"
        value={mensagem}
        onChangeText={text => setMensagem(text)}
      />
      <Button title="Request Donation" onPress={handleSolicitacaoDoacao} />
    </View>
  );
};

export default SolicitacaoDoacao;
