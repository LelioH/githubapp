import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';

import Avatar from '../../assets/avatar.png';

export default function Followers() {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.back}>
              <Text style={styles.backText}>Voltar</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
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
                  <Text style={styles.followerProfileText}>Visit</Text>
                </TouchableOpacity>
              </View>
            </View>
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
