import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgGray,
  },
  topContainer: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  loginLogo: {
    width: widthPercentageToDP('40%'),
    height: widthPercentageToDP('40%'),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: widthPercentageToDP('15%'),
  },
  tabBarOuterView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabBtn: {
    width: '60%',
    borderBottomColor: Colors.white,
    padding: 12,
    borderBottomWidth: 3,
  },
  tabText: {
    color: Colors.black,
    fontFamily: Fonts.semiBold,
    fontSize: widthPercentageToDP('4.3%'),
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  loginSection: {
    padding: widthPercentageToDP('10%'),
    flex: 1,
  },
  inputWrapper: {
    marginTop: widthPercentageToDP('5%'),
  },
  headingStyle: {
    fontFamily: Fonts.semiBold,
    color: Colors.black,
    opacity: 0.4,
    fontSize: widthPercentageToDP('4%'),
  },
  inputStyle: {
    fontFamily: Fonts.semiBold,
    color: Colors.black,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderColor: Colors.black,
    paddingVertical: 5,
    fontSize: widthPercentageToDP('4.5%'),
  },
  forgotPasscode: {
    color: Colors.primaryOrange,
    fontFamily: Fonts.semiBold,
    fontSize: widthPercentageToDP('4.2%'),
    paddingVertical: 5,
  },
  forgotBtn: {
    alignSelf: 'flex-start',
    marginTop: 20,
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
    backgroundColor: Colors.primaryOrange,
    borderRadius: 25,
    paddingVertical: 15,
  },
  getStartedBtnText: {
    fontFamily: Fonts.semiBold,
    fontSize: widthPercentageToDP('4.3%'),
    color: Colors.white,
    textAlign: 'center',
  },
});
