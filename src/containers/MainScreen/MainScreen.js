import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import styles from './styles';
import NavigationConstants from '../../constants/NavigationConstants';

const MainScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.themePrimaryRed}
      />
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={Images.mainScreenLogoRound} style={styles.logoImage} />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Food for Everyone</Text>
        </View>
        <View>
          <Image source={Images.mainScreenToy} style={styles.toyImage} />
        </View>
        <View style={styles.getStartedBtnContainer}>
          <TouchableOpacity
            style={styles.getStartedBtn}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate(NavigationConstants.loginScreen);
            }}>
            <Text style={styles.getStartedBtnText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
