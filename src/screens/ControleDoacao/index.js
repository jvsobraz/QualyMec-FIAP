import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const DoadorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/Doador')
      .then(response => {
        const { data } = response;
        setDonors(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {donors.map(donor => (
        <View key={donor.Id}>
          <Text>{donor.NomeDoador}</Text>
          <Text>{donor.endereco}</Text>
        </View>
      ))}
    </View>
  );
};

export default DoadorList;
