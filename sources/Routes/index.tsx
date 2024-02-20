import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import _ from 'lodash';
import React from 'react';
import {useSelector} from 'react-redux';
import {SignIn} from '../Modules';
import {RootState} from '../Redux/Reducers';
import BottomTabbar from './BottomTabs';

const AuthStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      animationEnabled: true,
      headerShown: false,
    }}>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{title: 'Sign In', animationEnabled: true}}
    />
  </AuthStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Template">
    <Drawer.Screen
      name="Home"
      component={BottomTabbar}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

const RootStackScreen = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const userToken = _.isEmpty(userReducer.data);

  return (
    <RootStack.Navigator>
      {userToken ? (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
