import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themePrimaryRed,
  },
  mainContainer: {
    flex: 1,
  },
  logoImage: {
    width: widthPercentageToDP('20%'),
    height: widthPercentageToDP('20%'),
  },
  logoContainer: {
    marginTop: 30,
    marginStart: 40,
  },
  headingContainer: {
    marginStart: 40,
  },
  heading: {
    fontFamily: Fonts.heavy,
    fontSize: widthPercentageToDP('15%'),
    color: Colors.white,
  },
  toyImage: {
    width: widthPercentageToDP('100%'),
    height: widthPercentageToDP('130%'),
    resizeMode: 'cover',
  },
  getStartedBtnContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  getStartedBtn: {
    width: widthPercentageToDP('76%'),
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingVertical: 15,
  },
  getStartedBtnText: {
    fontFamily: Fonts.semiBold,
    fontSize: widthPercentageToDP('4.3%'),
    color: Colors.themePrimaryRed,
    textAlign: 'center',
  },
});
