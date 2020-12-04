import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    backgroundColor: '#292929',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F1F1F',
    height: 126,
  },
  githubUser: {
    margin: 10,
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
  },
  logOff: {
    margin: 10,
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Light',
    color: '#FFFFFF',
  },
  avatarContainer: {
    marginTop: -57.5,
    alignItems: 'center',
  },
  avatar: {
    width: 115,
    height: 115,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 100,
  },
  profileInfoContainer: {
    marginTop: 45,
    marginLeft: 34,
  },
  flag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rectangle: {
    marginLeft: -40,
    width: 20,
    height: 42,
    backgroundColor: '#FFCE00',
    borderRadius: 100,
  },
  profileName: {
    marginLeft: 18,
    fontSize: 26,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileCity: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  socialContainer: {
    marginTop: 44,
    backgroundColor: '#5252525D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 97,
  },
  social: {
    alignItems: 'center',
  },
  socialNumber: {
    fontSize: 40,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
  },
  socialInfo: {
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Light',
    color: '#FFFFFF',
  },
  bioContainer: {
    marginTop: 53,
    marginLeft: 34,
    marginRight: 34,
    marginBottom: 100,
  },
  bioTitle: {
    marginLeft: 18,
    fontSize: 26,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  bioText: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light',
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
