import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './components/Profile/Profile';
import Deck from './components/CardDeck/Deck';
import AddDeckCard from './components/CardDeck/AddDeckCard';
import Login from './components/Login/Login';

const Stack = createStackNavigator();

const user = {
  username: 'Hally255',
  password: 'dragons'
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Group>
          <Stack.Screen name='Profile' component={Profile} initialParams={user} />
          <Stack.Screen name='Add to Deck List' component={AddDeckCard} initialParams={user} />
          <Stack.Screen name='Deck List' component={Deck} initialParams={user} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Login" component={Login} initialParams={user} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/*  */