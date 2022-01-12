import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import styles from './styles';
import NavigationConstants from '../../constants/NavigationConstants';

const LoginScreen = props => {
  const {navigation} = props;

  const [loginSelected, setLoginSelected] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      {/** Top container */}
      <View style={styles.topContainer}>
        <Image source={Images.loginLogo} style={styles.loginLogo} />
        <View style={styles.tabBarOuterView}>
          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => {
                setLoginSelected(true);
              }}
              style={[
                styles.tabBtn,
                loginSelected && {borderBottomColor: Colors.primaryOrange},
              ]}>
              <Text style={styles.tabText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => {
                setLoginSelected(false);
              }}
              style={[
                styles.tabBtn,
                !loginSelected && {borderBottomColor: Colors.primaryOrange},
              ]}>
              <Text style={styles.tabText}>Sign-up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/** Main Container */}
      <View style={styles.mainContainer}>
        {/** Login Section */}
        <View style={styles.loginSection}>
          <View style={styles.inputWrapper}>
            <Text style={styles.headingStyle}>Email Address</Text>
            <TextInput
              placeholder="example@mail.com"
              keyboardType="email-address"
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.headingStyle}>Password</Text>
            <TextInput
              placeholder="************"
              keyboardType="default"
              secureTextEntry={true}
              style={styles.inputStyle}
            />
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.forgotBtn}>
            <Text style={styles.forgotPasscode}>Forgot Passcode?</Text>
          </TouchableOpacity>
          <View style={styles.getStartedBtnContainer}>
            <TouchableOpacity
              style={styles.getStartedBtn}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate(NavigationConstants.drawer);
              }}>
              <Text style={styles.getStartedBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
