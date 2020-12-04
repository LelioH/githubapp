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
  backText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Bold',
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
  star: {
    color: '#FFCE00',
    fontSize: 15,
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
  unlocked: {
    color: '#63BF1F',
    fontSize: 15,
  },
  locked: {
    color: '#CC042A',
    fontSize: 15,
    marginLeft: 13,
  },
  footerContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
  },
  footer: {
    alignItems: 'center',
  },
  footerIcon: {
    fontSize: 20,
    color: '#A5A5A5',
  },
  footerInfo: {
    fontSize: 15,
    fontFamily: 'HelveticaNeue-Medium',
    color: '#A5A5A5',
  },
});
