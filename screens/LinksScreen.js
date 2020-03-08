import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import {
  Card,
  Text,
} from '@ui-kitten/components';


export default class LinksScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "halo",
      datas: [
        {
          data: "UI Kitten is a React Native implementation of Eva Design System. It contains a set of general purpose UI components styled in a similar way."
        },
        {
          data: "You focus on business logic and the Kitten takes care of visual appearance. "
        },
        {
          data: "And the most awesome thing: the themes can be changed in the runtime, without any need of reloading the application."
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {this.listRecycle()}
      </ScrollView>
    );
  }

  listRecycle() {
    return this.state.datas.map((chunk) => {
      return (
        <Card>
          <Text>
            {chunk.data}
          </Text>
        </Card>
      );
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  
});
