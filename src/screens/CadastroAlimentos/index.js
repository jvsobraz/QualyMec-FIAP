import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const AlimentoDoado = () => {
  const [nomeAlimento, setNomeAlimento] = useState([]);
  const [dataFabricacao, setDataFabricacao] = useState([]);
  const [dataValidade, setDataValidade] = useState([]);
  const [quantidadeAlimento, setQuantidadeAlimento] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/alimentoDoado')
      .then(response => {
        const { data } = response;
        setNomeAlimento(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {nomeAlimento.map(item => (
        <View key={item.Id}>
          <Text>{item.nome}</Text>
          <Text>{item.nrRegistro}</Text>
        </View>
      ))}
    </View>
  );
};

export default AlimentoDoado;
