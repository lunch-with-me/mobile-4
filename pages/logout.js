
import React, { Component } from 'react';

import { StyleSheet, View, Text,Button } from 'react-native';

import {AsyncStorage} from '@react-native-community/async-storage';
export default class Logout extends Component {
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        //this.setState({userName:value});
        //return(<Text>value</Text>)
        alert("comes")
      }
    } catch(e) {
      alert(e)
      
    }
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Are u sure you want to log out </Text>
        <Button title='log out' 
        
        onPress={() => this.getData()} 
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});