import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Colors from '../Colors';

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      UserEmail: '',
      UserPassword: ''

    }
  }

  goSecond() {
    Actions.secondActivity({ userid })
  }
  UserRegistrationFunction = () => {

    fetch('http://YourWebsite/register.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.UserEmail,
        password: this.state.UserPassword
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  UserLoginFunction = () => {

    const { UserEmail } = this.state;
    const { UserPassword } = this.state;

    fetch('http://YourWebsite/login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: UserEmail,
        password: UserPassword
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
        if (responseJson.includes('Data Matched')) {
          userid = responseJson.split(' ')[2];
          this.goSecond();
        }
        else {
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../images/vbt.png')} />

        <TextInput style={styles.inputBox}

          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#1c313a"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}

          onChangeText={email => this.setState({ UserEmail: email })}
        />
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#1c313a"
          ref={(input) => this.password = input}

          onChangeText={password => this.setState({ UserPassword: password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.props.type ? this.UserLoginFunction : this.UserRegistrationFunction}>
          <Text style={styles.buttonText}>{this.props.type ? "Login" : "Signup"}</Text>
        </TouchableOpacity>

      </View>


    );
  }

};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  inputBox: {
    width: 380,
    height: 70,
    backgroundColor: 'white',

    paddingHorizontal: 16,
    fontSize: 22,
    color: '#2f312c',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: Colors.navbarBackgroundColor,
    borderRadius: 12,
    marginVertical: 16,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  image: {
    marginVertical: 26,
    marginTop: 70
  },

});
