import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class BadScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.badLabel}>Your Door is Unlocked</Text>
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
  
});
