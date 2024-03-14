/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Detail, Home} from '../../Modules';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Detail} />
    <HomeStack.Screen name="Cart" component={Cart} />
  </HomeStack.Navigator>
);
