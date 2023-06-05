import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const InstitutoList = () => {
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/Instituto')
      .then(response => {
        const { data } = response;
        setInstitutes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {institutes.map(institute => (
        <View key={institute.Id}>
          <Text>{institute.nome}</Text>
          <Text>{institute.endereco}</Text>
        </View>
      ))}
    </View>
  );
};

export default InstitutoList;
