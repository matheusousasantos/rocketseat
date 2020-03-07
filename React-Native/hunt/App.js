import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  render() {

    return(
      <View style={styles.container}>
        <Text style={ styles.text }>Meu Primeiro app React Native</Text>

        <View style={styles.box} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: 60,
    height: 60,
    backgroundColor: '#F00'
  }
});
