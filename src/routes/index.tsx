import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../screens/Home';
import CreateCheckList from '../screens/CreateCheckList';
import ViewCheckList from '../screens/ViewCheckList';
import UpdateCheckList from '../screens/UpdateCheckList';
import Splash from '../screens/Splash';

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CreateCheckList" component={CreateCheckList} />
      <Screen name="ViewCheckList" component={ViewCheckList} />
      <Screen name="UpdateCheckList" component={UpdateCheckList} />
    </Navigator>
  );
}