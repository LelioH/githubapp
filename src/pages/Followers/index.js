import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

import Avatar from '../../assets/avatar.png';

export default function Followers({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate('Profile')}>
              <Feather name="arrow-left" size={26} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.titleFollowers}>X Seguidores</Text>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.followers}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Image style={styles.followerAvatar} source={Avatar} />
              <View style={styles.followVisit}>
                <Text style={styles.followerName}>#follower-name</Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.followerProfileText}
                    name="arrow-right"
                    size={26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
