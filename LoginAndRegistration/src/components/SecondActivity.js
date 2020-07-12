
// React native and others libraries imports
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from './Text';
import Navbar from './Navbar';

export default class Home extends Component {
  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={Actions.login} transparent>
          <Icon name='ios-log-out' />
        </Button>
      </Right>
    );
    return (
      <Container style={styles.container} >
        <Navbar left={left} right={right} />
        <Content>
          <View style={styles.view} >
            <Image
              style={styles.image}
              source={require('../images/vbt.png')} />
            <Text style={styles.text}>Welcome to VBT</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',

  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginVertical: 26,
    marginTop: 70
  },
  text: {
    color: 'white',
    fontSize: 40,
    paddingVertical: 12
  }
});