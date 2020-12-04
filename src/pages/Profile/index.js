import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';

import Avatar from '../../assets/avatar.png';

export default function Profile() {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.githubUser}>#github.user</Text>
            <Text style={styles.logOff}>Sair</Text>
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

          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerIcon}>I</Text>
              <Text style={styles.footerInfo}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerIcon}>S</Text>
              <Text style={styles.footerInfo}>Seguidores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerIcon}>S</Text>
              <Text style={styles.footerInfo}>Seguindo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer}>
              <Text style={styles.footerIcon}>R</Text>
              <Text style={styles.footerInfo}>Repos</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
