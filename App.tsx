import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './src/config/theme.config';
import RootNaviagtion from './src/navigations/root.navigation';

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNaviagtion></RootNaviagtion>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
