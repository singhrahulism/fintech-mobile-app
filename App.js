import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons'
import DrawerHeader from './src/components/Drawer/DrawerHeader';

import HomeScreen from './src/screens/drawerScreens/HomeScreen';
import TransactionsScreen from './src/screens/drawerScreens/TransactionsScreen';
import StatisticScreen from './src/screens/drawerScreens/StatisticScreen';
import CardsScreen from './src/screens/drawerScreens/CardsScreen';
import ProfileScreen from './src/screens/drawerScreens/ProfileScreen';
import SettingsScreen from './src/screens/drawerScreens/SettingsScreen';
import DrawerFooter from './src/components/Drawer/DrawerFooter';

const Drawer = createDrawerNavigator();
const HomeStackNav = createNativeStackNavigator()

function DrawerContent(props) {
  return (
    <>
      <DrawerHeader />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerFooter />
    </>
  );
}

function HomeStack() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name='Home' component={HomeScreen} />
    </HomeStackNav.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerContent} >
        <Drawer.Screen
          name='HomeStack'
          component={HomeStack}
          options={{
            title: ' Home',
            headerShown: false,
            drawerActiveTintColor: '#535cda',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: (tintColor) => {return <FontAwesome5 name={'home'} size={22} color={tintColor.color} />}
          }}
        />
        <Drawer.Screen
          name='Transactions'
          component={TransactionsScreen}
          options={{
            title: '   Trans',
            headerShown: false,
            drawerActiveTintColor: '#535cda',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: (tintColor) => {return <FontAwesome5 name={'file-invoice-dollar'} size={22} color={tintColor.color} />}
          }}
        />
        <Drawer.Screen
          name='Statistic'
          component={StatisticScreen}
          options={{
            title: ' Statistic',
            headerShown: false,
            drawerActiveTintColor: '#535cda',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: (tintColor) => {return <FontAwesome5 name={'chart-line'} size={22} color={tintColor.color} />}
          }}
        />
        <Drawer.Screen
          name='Cards'
          component={CardsScreen}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#535cda',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: (tintColor) => {return <FontAwesome5 name={'credit-card'} size={22} color={tintColor.color} />}
          }}
        />
        <Drawer.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            title: ' Profile',
            headerShown: false,
            drawerActiveTintColor: '#535cda',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: (tintColor) => {return <FontAwesome5 name={'user-alt'} size={22} color={tintColor.color} />}
          }}
        />
        <Drawer.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            title: ' Settings',
            headerShown: false,
            drawerActiveTintColor: '#535cda',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: (tintColor) => {return <FontAwesome5 name={'cog'} size={22} color={tintColor.color} />}
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
