import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Linking} from 'react-native'

export default class GoodScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.badLabel}>Sprinkler is NOT Stable</Text>
        <TouchableOpacity style={styles.emergency}  onPress={() => Linking.openURL(`tel:${911}`)}>Call 911</TouchableOpacity>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            Home
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 350,
  },
  badLabel: {
    marginTop: 50,
    fontSize: 30,
    color: 'white',
  },
  homeButton: {
    fontSize: 20,
    borderWidth: 5,
    width: 70,
    color: 'white',
    borderColor: 'white',
  },
  
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  emergency: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    borderWidth: 6,
    borderColor: 'white',
    width: 200,
    alignSelf: 'center',
    borderRadius: 40,
    marginTop: 50,
  },
});
