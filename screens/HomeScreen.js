import * as React from 'react';
import { Linking } from 'react-native';

import { Layout, Text } from '@ui-kitten/components';

export default function HomeScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1' onPress={() => { Linking.openURL('https://akveo.github.io/react-native-ui-kitten/') }}>Documentation</Text>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
