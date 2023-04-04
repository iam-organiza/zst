import {Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {palette} from '../constants/palette';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#202123'}}>
      <View flex={1}>
        <Text
          fontFamily={'Montserrat'}
          fontSize={16}
          color={palette.TextPrimary}>
          Ready
        </Text>
        <FontAwesome name="rocket" size={30} color="#900" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
