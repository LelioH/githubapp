import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function Repositories() {
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.back}>
              <Text style={styles.backText}>Voltar</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
                <Text style={styles.star}>S</Text>
                <Text style={styles.starNumber}>32</Text>
              </TouchableOpacity>
              <View style={styles.locks}>
                <TouchableOpacity>
                  <Text style={styles.unlocked}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.locked}>R</Text>
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
