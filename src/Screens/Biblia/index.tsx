import React from 'react';
import { Text, View } from 'react-native';
import { navigationInterface } from '../../interfaces/GlobalInterfaces';
import styles from './styles';

const BibliaScreen = ({ navigation }: navigationInterface) => {
  return (
    <View style={styles.container}>
      <Text>Bíblia</Text>
    </View>
  );
};

export default BibliaScreen;
