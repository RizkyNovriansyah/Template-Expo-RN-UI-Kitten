import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import { SafeAreaView } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon, } from '@ui-kitten/components';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title='HOME' />
        <BottomNavigationTab title='LINKS' />
      </BottomNavigation>
    </SafeAreaView>
  );
};

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'UI Kitten Component';
    case 'List':
      return 'List to learn more';
  }
}