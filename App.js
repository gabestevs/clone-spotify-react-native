import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PlayerScreen } from './screens/Player';

const Tab = createBottomTabNavigator();

function HomeScreen(){
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>
        Hi I'm your home!
      </Text>
    </View>
  );
}


function Mytabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Screen" component={HomeScreen}/>
      <Tab.Screen name="Player" component={PlayerScreen}/>
    </Tab.Navigator>   
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mytabs/>
    </NavigationContainer>  
  );
}