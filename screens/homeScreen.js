import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text>Select a device to check up on</Text>
        </View>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('SprinklerScreen')}>
          <Text style={styles.routeText}>Sprinklers</Text>
          <Text style={styles.bgDigit}>1</Text>
          <Image source={require("../assets/sprinkler.png")} style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('LightsScreen')}>
          <Text style={styles.routeText}>Lights</Text>
          <Text style={styles.bgDigit}>2</Text>
          <Image source={require("../assets/light.png")} style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('DoorsScreen')}>
          <Text style={styles.routeText}>Doors</Text>
          <Text style={styles.bgDigit}>3</Text>
          <Image source={require("../assets/door.png")} style={styles.iconImage}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome:{
  fontSize:35,
  textAlign:'center',
  fontWeight:'bold'
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 70,
        paddingLeft: 10
    },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -25,
    zIndex: -1,
  },
  iconImage: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 90,
        bottom:10
    }
});
