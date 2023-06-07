import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';

export default function Servicos({navigation}) {
  function handleCreateAlimento() {
    navigation.navigate('Alimento')
  };

  function handleCreateControleDoacao() {
    navigation.navigate('ControleDoacao')
  };

  function handleCreateDoador() {
    navigation.navigate('Doador')
  };

  function handleHistoricoSolicitacao() {
    navigation.navigate('HistoricoSoliticacao')
  };

  function handleCreateInstituto() {
    navigation.navigate('Instituto')
  };

  return (
    <View style={styles.container}>
      <Header title="Serviços" />
      <View style={styles.contentContainer}>
        <Text style={styles.greetingText}>Olá!</Text>
        <Text style={styles.serviceText}>
          Qual tela você gostaria de utilizar?
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateAlimento}
          >
            <Icon name="leaf" size={80} style={styles.serviceIcon} />
            <Text style={styles.serviceLabel}>Dados do Solo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleDadosClima}
          >
            <Icon name="cloud" size={80} style={styles.serviceIcon} />
            <Text style={styles.serviceLabel}>Dados do Clima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}