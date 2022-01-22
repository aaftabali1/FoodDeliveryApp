import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColorDashboard,
  },
  headerContainer: {
    paddingHorizontal: 40,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuOuter: {
    padding: 5,
  },
  heading: {
    fontFamily: Fonts.bold,
    fontSize: widthPercentageToDP('10%'),
    color: Colors.black,
    marginStart: 40,
  },
  mainContainer: {
    marginTop: 30,
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginStart: 40,
    marginEnd: 40,
    backgroundColor: '#EFEEEE',
    borderRadius: 40,
    alignItems: 'center',
    paddingStart: 30,
    paddingEnd: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  searchInput: {
    paddingStart: 20,
    fontFamily: Fonts.semiBold,
    flex: 1,
    fontSize: widthPercentageToDP('4.7%'),
    paddingTop: 14,
    paddingBottom: 10,
  },
  searchIcon: {width: 20, height: 20},
  categoryFlatList: {marginStart: 40, marginTop: 20},
  categoryItemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
  },
  selectedCategoryItemContainer: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.primaryOrange,
  },
  categoryItemText: {
    color: Colors.black,
    fontSize: widthPercentageToDP('4.6%'),
    fontFamily: Fonts.regular,
  },
  selectedCategoryItemText: {
    color: Colors.primaryOrange,
  },
});
