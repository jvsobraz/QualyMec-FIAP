import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const AlimentoDoado = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/AlimentoDoado')
      .then(response => {
        const { data } = response;
        setFoodItems(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {foodItems.map(item => (
        <View key={item.Id}>
          <Text>{item.nome}</Text>
          <Text>{item.nrRegistro}</Text>
        </View>
      ))}
    </View>
  );
};

export default AlimentoDoado;
