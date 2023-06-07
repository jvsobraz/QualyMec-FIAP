import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';
import styles from './styles';

export default function Servicos({ navigation }) {
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
          O que você gostaria de utilizar?
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateAlimento}
          >
            <Text style={styles.serviceLabel}>Alimentos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateAlimento}
          >
            <Text style={styles.serviceLabel}>Alimentos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateDoador}
          >
            <Text style={styles.serviceLabel}>Doadores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateDoador}
          >
            <Text style={styles.serviceLabel}>Doadores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateInstituto}
          >
            <Text style={styles.serviceLabel}>ONGs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleCreateInstituto}
          >
            <Text style={styles.serviceLabel}>ONGs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleHistoricoSolicitacao}
          >
            <Text style={styles.serviceLabel}>Histórico Solicitação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleHistoricoSolicitacao}
          >
            <Text style={styles.serviceLabel}>Histórico Solicitação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}