import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../containers/MainScreen';
import NavigationConstants from '../constants/NavigationConstants';
import LoginScreen from '../containers/LoginScreen';
import Dashboard from '../containers/Dashboard';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  getDrawerStatusFromState,
} from '@react-navigation/drawer';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../containers/Favorites';
import Profile from '../containers/Profile';
import OrderHistory from '../containers/OrderHistory';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const beforeLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationConstants.mainScreen}
        component={MainScreen}
      />
      <Stack.Screen
        name={NavigationConstants.loginScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = props => {
  const isOpen = getDrawerStatusFromState(props.navigation.getState());
  return (
    <DrawerContentScrollView
      {...props}
      style={{backgroundColor: Colors.primaryOrange}}
      contentContainerStyle={{flex: 1}}>
      {isOpen == 'open' && (
        <StatusBar
          backgroundColor={Colors.primaryOrange}
          barStyle="light-content"
        />
      )}
      <View
        style={{
          paddingHorizontal: 40,
          marginTop: heightPercentageToDP('23%'),
          flex: 1,
        }}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() =>
            props.navigation.navigate(NavigationConstants.dashboard)
          }>
          <Image
            source={Images.profileIcon}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
          <Text style={styles.textStyleDrawer}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar} />

        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() =>
            props.navigation.navigate(NavigationConstants.dashboard)
          }>
          <Image
            source={Images.orderIcon}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
          <Text style={styles.textStyleDrawer}>Orders</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar} />

        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() =>
            props.navigation.navigate(NavigationConstants.dashboard)
          }>
          <Image
            source={Images.offerIcon}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
          <Text style={styles.textStyleDrawer}>Offer and promo</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar} />

        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() =>
            props.navigation.navigate(NavigationConstants.dashboard)
          }>
          <Image
            source={Images.privacyPolicyIcon}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
          <Text style={styles.textStyleDrawer}>Privacy policy</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar} />

        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() =>
            props.navigation.navigate(NavigationConstants.dashboard)
          }>
          <Image
            source={Images.securityIcon}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
          <Text style={styles.textStyleDrawer}>Security</Text>
        </TouchableOpacity>
        <View style={styles.bottomBar} />

        <View style={{position: 'absolute', bottom: 0, left: 40}}>
          <TouchableOpacity
            style={{flexDirection: 'row', marginBottom: 40}}
            onPress={() =>
              props.navigation.navigate(NavigationConstants.loginScreen)
            }>
            <Text style={styles.textStyleDrawer}>Sign-out</Text>
            <Image
              source={Images.arrowRight}
              style={{
                width: 18,
                height: 10,
                resizeMode: 'contain',
                marginTop: 17,
                marginStart: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  textStyleDrawer: {
    fontFamily: Fonts.semiBold,
    color: Colors.white,
    marginStart: 10,
    fontSize: widthPercentageToDP('4.3%'),
    textAlignVertical: 'center',
    marginTop: 5,
  },
  bottomBar: {
    height: 1,
    width: '70%',
    backgroundColor: 'rgba(256,256,256,0.3)',
    marginVertical: 15,
    marginStart: 35,
  },
  drawerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

const drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        headerShown: false,
      }}>
      <Drawer.Screen
        name={NavigationConstants.dashboard}
        component={bottomTabBar}
      />
    </Drawer.Navigator>
  );
};

const bottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={NavigationConstants.dashboard} component={Dashboard} />
      <Tab.Screen name={NavigationConstants.favorites} component={Favorites} />
      <Tab.Screen name={NavigationConstants.profile} component={Profile} />
      <Tab.Screen
        name={NavigationConstants.orderHistory}
        component={OrderHistory}
      />
    </Tab.Navigator>
  );
};

const CustomTabBar = props => {
  const navigateToDashboardScreen = () => {
    props.navigation.navigate(NavigationConstants.dashboard);
  };

  const navigateToFavoritesScreen = () => {
    props.navigation.navigate(NavigationConstants.favorites);
  };

  const navigateToProfileScreen = () => {
    props.navigation.navigate(NavigationConstants.profile);
  };

  const navigateToOrderHistoryScreen = () => {
    props.navigation.navigate(NavigationConstants.orderHistory);
  };

  return (
    <View style={styles.TabBarMainContainer}>
      <TouchableOpacity
        onPress={navigateToDashboardScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Image source={Images.profileIcon} />
      </TouchableOpacity>

      <View style={{height: 50, backgroundColor: '#fff', width: 2}} />

      <TouchableOpacity
        onPress={navigateToFavoritesScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Text style={styles.TextStyle}> SCREEN 2 </Text>
      </TouchableOpacity>

      <View style={{height: 50, backgroundColor: '#fff', width: 2}} />

      <TouchableOpacity
        onPress={navigateToProfileScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Text style={styles.TextStyle}> SCREEN 3 </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToOrderHistoryScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Text style={styles.TextStyle}> SCREEN 3 </Text>
      </TouchableOpacity>
    </View>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationConstants.beforeLogin}
        component={beforeLogin}
      />
      <Stack.Screen name={NavigationConstants.drawer} component={drawer} />
    </Stack.Navigator>
  );
};

export default Navigation;
