import {createConfigItem} from '@babel/core';
import React from 'react';
import {Text, View} from 'react-native';
import biblia from './../../data/biblia';

const TabBibliaScreen = ({navigation}) => {
  return (
    <View>
      {biblia.map(item => (
        <Text>{}</Text>
      ))}
    </View>
  );
};

export default TabBibliaScreen;
