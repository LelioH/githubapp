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
  titleFollowers: {
    flexGrow: 3,
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Bold',
  },
  followers: {
    borderBottomWidth: 1,
    borderBottomColor: '#7070705A',
  },
  flag: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34,
  },
  rectangle: {
    marginLeft: -10,
    width: 20,
    height: 42,
    backgroundColor: '#FFCE00',
    borderRadius: 100,
  },
  followerAvatar: {
    width: 64,
    height: 64,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    marginLeft: 15,
  },
  followVisit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  followerName: {
    marginLeft: 32,
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
  },
  followerProfileText: {
    marginLeft: 114,
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
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
