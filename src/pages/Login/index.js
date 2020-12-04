import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function Login() {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.iconGH}>GitHub</Text>
          <TextInput
            placeholder="Usuário"
            autoFocus={true}
            style={styles.inputLogin}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
