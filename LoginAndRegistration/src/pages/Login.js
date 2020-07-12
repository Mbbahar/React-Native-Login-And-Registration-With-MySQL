import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';

import Colors from '../Colors';
import Form from '../components/Form';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  signup() {
    Actions.signup()
  }

  render() {
    return (
      <View style={styles.container} >
        <Form type={true} />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0C0C0',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: Colors.navbarBackgroundColor,
    fontSize: 20
  },
  signupButton: {
    color: '#696969',
    fontSize: 20,
    fontWeight: '500'
  }
});
