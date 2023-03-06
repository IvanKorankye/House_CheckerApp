import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class GoodScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.goodLabel}>Sprinkler is Stable</Text>
        <Image
          source={require('../assets/checkmark.png')}
          style={styles.checkImage}>
          {' '}
        </Image>
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
    //flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200,
  },
  goodLabel: {
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
    backgroundColor: 'green',
  },
  checkImage: {
    height: 200,
    width: 200,
    marginTop: 50,
    alignContent: 'center',
  },
});
