import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

import api from '../../services/api';

import Avatar from '../../assets/avatar.png';

export default function Profile({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.githubUser}>#github.user</Text>
            <TouchableOpacity
              style={styles.logOff}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logOffText}>Sair</Text>
              <Feather name="log-out" size={17} color="#D03434" />
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={Avatar} />
          </View>

          <View style={styles.profileInfoContainer}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.profileName}>Profile Name</Text>
            </View>
            <Text style={styles.profileEmail}>Profile E-mail</Text>
            <Text style={styles.profileCity}>Profile City</Text>
          </View>

          <View style={styles.socialContainer}>
            <View style={styles.social}>
              <Text style={styles.socialNumber}>32</Text>
              <Text style={styles.socialInfo}>Seguidores</Text>
            </View>
            <View style={styles.social}>
              <Text style={styles.socialNumber}>32</Text>
              <Text style={styles.socialInfo}>Seguindo</Text>
            </View>
            <View style={styles.social}>
              <Text style={styles.socialNumber}>10</Text>
              <Text style={styles.socialInfo}>Repos</Text>
            </View>
          </View>

          <View style={styles.bioContainer}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.bioTitle}>Bio</Text>
            </View>
            <Text style={styles.bioText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ex
              porttitor, rhoncus lorem eu, aliquet tellus. Nulla iaculis
              accumsan augue, vitae sodales mauris. In vitae consequat sem, et
              vulputate arcu. In hac habitasse platea dictumst. Fusce cursus
              pharetra ante dictum sodales. Donec ut elit eget enim commodo
              pretium. Maecenas tempor rhoncus erat in faucibus.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
