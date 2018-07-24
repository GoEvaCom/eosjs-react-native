/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {get_info} from './EOS_example.js'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    'head_block_producer': 'Unloaded',
    'chain_id': 'Unloaded'
  }

  componentDidMount(){
    get_info().then(info => {
      this.setState({
        'head_block_producer': info['head_block_producer'],
        'chain_id': info['chain_id']
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>EOSJS React-Native Example</Text>
        <Text style={styles.instructions}>Head Block Producer: {this.state.head_block_producer}</Text>
        <Text style={styles.instructions}>Chain Id {this.state.chain_id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
