import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routes} from '../constants/routes';
import HomeScreen from '../screens/home.screen';
import {RootStackParamList} from '../types/rootstackparamlist.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNaviagtion: React.FC<any> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNaviagtion;
