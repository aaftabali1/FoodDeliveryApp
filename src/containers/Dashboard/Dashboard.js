import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import Colors from '../../constants/Colors';

const Dashboard = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.bgColorDashboard}}>
      <StatusBar
        backgroundColor={Colors.bgColorDashboard}
        barStyle="dark-content"
      />
      <View>
        <Text>Dashboard</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
