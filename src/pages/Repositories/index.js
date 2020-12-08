import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function Repositories({navigation}) {
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
            <Text style={styles.titleRepo}>X Repositórios</Text>
          </View>

          <View style={styles.repository}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.repositoryName}>repository-name</Text>
            </View>
            <Text style={styles.repositoryDescription}>
              repository description
            </Text>
            <View style={styles.repositoriesExtra}>
              <TouchableOpacity style={styles.extraStar}>
                <Feather name="star" size={18} color="#FFCE00" />
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Feather name="unlock" size={18} color="#63BF1F" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    style={styles.locked}
                    name="lock"
                    size={18}
                    color="#CC042A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.repository}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.repositoryName}>repository-name</Text>
            </View>
            <Text style={styles.repositoryDescription}>
              repository description
            </Text>
            <View style={styles.repositoriesExtra}>
              <TouchableOpacity style={styles.extraStar}>
                <Feather name="star" size={18} color="#FFCE00" />
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Feather name="unlock" size={18} color="#63BF1F" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    style={styles.locked}
                    name="lock"
                    size={18}
                    color="#CC042A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.repository}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.repositoryName}>repository-name</Text>
            </View>
            <Text style={styles.repositoryDescription}>
              repository description
            </Text>
            <View style={styles.repositoriesExtra}>
              <TouchableOpacity style={styles.extraStar}>
                <Feather name="star" size={18} color="#FFCE00" />
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Feather name="unlock" size={18} color="#63BF1F" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    style={styles.locked}
                    name="lock"
                    size={18}
                    color="#CC042A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.repository}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.repositoryName}>repository-name</Text>
            </View>
            <Text style={styles.repositoryDescription}>
              repository description
            </Text>
            <View style={styles.repositoriesExtra}>
              <TouchableOpacity style={styles.extraStar}>
                <Feather name="star" size={18} color="#FFCE00" />
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Feather name="unlock" size={18} color="#63BF1F" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    style={styles.locked}
                    name="lock"
                    size={18}
                    color="#CC042A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.repository}>
            <View style={styles.flag}>
              <View style={styles.rectangle} />
              <Text style={styles.repositoryName}>repository-name</Text>
            </View>
            <Text style={styles.repositoryDescription}>
              repository description
            </Text>
            <View style={styles.repositoriesExtra}>
              <TouchableOpacity style={styles.extraStar}>
                <Feather name="star" size={18} color="#FFCE00" />
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Feather name="unlock" size={18} color="#63BF1F" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    style={styles.locked}
                    name="lock"
                    size={18}
                    color="#CC042A"
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
