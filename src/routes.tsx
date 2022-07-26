import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import BibliaScreen from './Screens/Biblia';
import HinoScreen from './Screens/Hino';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import TabBibliaScreen from './Screens/TabBiblia';
import escolhida from './data/escolhida';
import {versionList} from './Services/version';
import TabVersionScreen from './Screens/TabVersion';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Índice" component={Books} />
        <Stack.Screen name="Versões" component={Version} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = () => {
  return (
    <Drawer.Navigator initialRouteName="Bíblia">
      <Drawer.Screen
        name="Bíblia"
        component={BibliaScreen}
        options={({navigation}) => ({
          headerRight: () => <HeaderBiblia navigation={navigation} />,
        })}
      />
      <Drawer.Screen name="Hino da harpa cristã" component={HinoScreen} />
    </Drawer.Navigator>
  );
};

const Books = ({route}) => {
  return (
    <Tab.Navigator initialRouteName={route.params.Tipo}>
      <Tab.Screen name="Livros" component={TabBibliaScreen} />
      <Tab.Screen name="Capítulos" component={TabBibliaScreen} />
      <Tab.Screen name="Versículos" component={TabBibliaScreen} />
    </Tab.Navigator>
  );
};

const Version = () => {
  return (
    <Tab.Navigator initialRouteName="Todas">
      <Tab.Screen name="Todas" component={TabVersionScreen} />
      <Tab.Screen name="Baixado" component={TabVersionScreen} />
    </Tab.Navigator>
  );
};

const HeaderBiblia = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Índice', {Tipo: 'Livros'})}
        style={styles.option}>
        <Text>{escolhida.livro}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Índice', {Tipo: 'Capítulos'})}
        style={styles.option}>
        <Text>{escolhida.capitulo}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Versões');
        }}
        style={styles.option}>
        <Text>{escolhida.versao}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  option: {
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginEnd: 6,
  },
});

export default Routes;
