import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcomeLabel}> Welcome </Text>
        <Text style={styles.descriptionLabel}>
          {' '}
          Lets find out if your doors are locked{' '}
        </Text>
        <TouchableOpacity
          style={styles.goodButton}
          onPress={() => this.props.navigation.navigate('DoorsOkScreen')}>
          Doors are locked
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.badButton}
          onPress={() => this.props.navigation.navigate('DoorsBadScreen')}>
          Doors are not locked
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeLabel: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 50,
  },
  descriptionLabel: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  goodButton: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 40,
    borderWidth: 5,
    borderRadius: 100,
    color: 'white',
    backgroundColor: 'green',
  },
   badButton: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 40,
    borderWidth: 5,
    borderRadius: 100,
    color: 'white',
    backgroundColor: 'red',
  },
});
