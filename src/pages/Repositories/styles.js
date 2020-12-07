import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    backgroundColor: '#292929',
    height: '100%',
  },
  header: {
    padding: 17,
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    height: 68,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  back: {
    flexGrow: 2,
  },
  titleRepo: {
    flexGrow: 3,
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Bold',
  },
  repository: {
    borderBottomWidth: 1,
    borderBottomColor: '#7070705A',
  },
  flag: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rectangle: {
    marginLeft: -10,
    width: 20,
    height: 42,
    backgroundColor: '#FFCE00',
    borderRadius: 100,
  },
  repositoryName: {
    marginLeft: 18,
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
  },
  repositoryDescription: {
    marginLeft: 28,
    fontSize: 15,
    fontFamily: 'HelveticaNeue-Light',
    color: '#FFFFFF',
  },
  repositoriesExtra: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 13,
    marginLeft: 28,
    marginRight: 28,
    marginBottom: 34,
  },
  extraStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starNumber: {
    marginLeft: 6.5,
    color: '#FFFFFF',
    fontSize: 15,
  },
  locks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locked: {
    marginLeft: 13,
  },
});
