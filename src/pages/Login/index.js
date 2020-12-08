import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont();

import styles from './styles';

export default class Login extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleSearch = () => {
    console.log(this.state.newUser);
  };

  render() {
    const {users, newUser} = this.state;

    return (
      <>
        <SafeAreaView style={styles.screen}>
          <View style={styles.container}>
            <AntDesign name="github" size={98} color="#FFCE00" />
            <TextInput
              placeholder="Usuário"
              autoFocus={true}
              required={true}
              style={styles.inputLogin}
              value={newUser}
              onChangeText={(text) => this.setState({newUser: text})}
            />
            <TouchableOpacity
              style={styles.buttonLogin}
              onClick={this.handleSearch}>
              <Text style={styles.buttonText}>ENTRAR</Text>
              <AntDesign name="arrowright" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
