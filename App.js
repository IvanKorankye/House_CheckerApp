import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homeScreen';
import DoorsScreen from './screens/doorsScreen';
import DoorsOkScreen from './screens/doorsOkScreen';
import DoorsBadScreen from './screens/doorsBadScreen';

import LightsScreen from './screens/lightsScreen';
import LightsOnScreen from './screens/lightsOnScreen';
import LightsOffScreen from './screens/lightsOffScreen';

import SprinklerScreen from './screens/SprinklerScreen';
import SprinklerBadScreen from './screens/sprinklerBadScreen';
import SprinklerGoodScreen from './screens/sprinklerGoodScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DoorsScreen" component={DoorsScreen} />
        <Stack.Screen name="LightsScreen" component={LightsScreen} />
        <Stack.Screen name="SprinklerScreen" component={SprinklerScreen} />
        <Stack.Screen name="SprinklerGoodScreen" component={SprinklerGoodScreen}/>
        <Stack.Screen name="SprinklerBadScreen"component={SprinklerBadScreen}  />
        <Stack.Screen name="LightsOnScreen" component={LightsOnScreen}/>
        <Stack.Screen name="LightsOffScreen" component={LightsOffScreen}/>
        <Stack.Screen name="DoorsOkScreen" component={DoorsOkScreen}/>
        <Stack.Screen name="DoorsBadScreen" component={DoorsBadScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
