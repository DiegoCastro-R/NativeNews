import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from '../pages/Home';
import Camara from '../pages/Camara'
import Covid from '../pages/Covid';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
<>
  <Tab.Navigator screenOptions={{}}>
    <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} />
    <Tab.Screen name="Camara"  component={Camara} options={{
          tabBarLabel: 'Camara',
          tabBarIcon: ({ color, size }) => (
            <Icon name="landmark" color={color} size={size} />
          ),
        }} />
    <Tab.Screen name="Comunicar" component={Home} options={{
          tabBarLabel: 'Comunicar',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" color={color} size={size} />
          ),
        }} />
    <Tab.Screen name="ProtecaoCivil" component={Home}  options={{
          tabBarLabel: 'Protecao Civil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alert" color={color} size={size} />),}} />
    <Tab.Screen name="COVID" component={Covid} options={{
          tabBarLabel: 'COVID',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="healing" color={color} size={size} />),}} />
    <Tab.Screen name="Agenda" component={Home} options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-range-outline" color={color} size={size} />),}} />
  </Tab.Navigator>
  </>
);

export default Routes;