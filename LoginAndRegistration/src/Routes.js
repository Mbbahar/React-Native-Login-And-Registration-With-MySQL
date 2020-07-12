import React, { Component } from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import SecondActivity from './components/SecondActivity';

export default class Routes extends Component {
    render() {
        return (

            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Signup" />
                    <Scene key="secondActivity" component={SecondActivity} title="secondActivity" />
                </Stack>
            </Router>
        );
    }
};