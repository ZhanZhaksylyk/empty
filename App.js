import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChartField from './ChartField.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ChartField width='70' img={require('./images/smile.png')}/>
      <ChartField width='40' img={require('./images/smile.png')}/>
      <ChartField width='20' img={require('./images/smile.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width:200
  },
});
