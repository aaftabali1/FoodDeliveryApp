import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
import NavigationConstants from '../../constants/NavigationConstants';
import styles from './styles';

const Dashboard = props => {
  const categoryData = [
    {id: 1, name: 'Foods'},
    {id: 2, name: 'Drinks'},
    {id: 3, name: 'Snacks'},
    {id: 4, name: 'Souce'},
  ];

  const [selectedCategory, setSelectedCategory] = useState(1);

  const categoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item.id)}
        key={item.id}
        style={[
          styles.categoryItemContainer,
          selectedCategory === item.id && styles.selectedCategoryItemContainer,
        ]}>
        <Text
          style={[
            styles.categoryItemText,
            selectedCategory === item.id && styles.selectedCategoryItemText,
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const foodItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item.id)}
        key={item.id}>
        <Image source={Images.food} />
        <Text>d</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.bgColorDashboard}
        barStyle="dark-content"
      />
      {/** Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
          style={styles.menuOuter}>
          <Image source={Images.menu} style={{width: 20, height: 20}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(NavigationConstants.orderHistory)
          }
          style={styles.menuOuter}>
          <Image source={Images.cartIcon} style={{width: 25, height: 25}} />
        </TouchableOpacity>
      </View>
      {/** Main Container */}
      <View style={styles.mainContainer}>
        {/** Main Title */}
        <Text style={styles.heading}>Delicious{'\n'}food for you</Text>
        {/** Search Input */}
        <View style={styles.searchInputContainer}>
          <Image source={Images.search} style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            numberOfLines={1}
          />
        </View>

        {/** Tabs View */}
        <View>
          <FlatList
            data={categoryData}
            renderItem={categoryItem}
            horizontal
            style={styles.categoryFlatList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
        {/** Items View */}
        <View>
          <FlatList
            data={categoryData}
            renderItem={foodItem}
            horizontal
            style={styles.categoryFlatList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
