import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from './src/pages/Home';
import { Member } from './src/pages/Member';
import { Other } from './src/pages/Other';

const Tabs = createBottomTabNavigator();

export default function App() {
  const num = 0;
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            }} />
        <Tabs.Screen 
          name="Member" 
          component={Member} 
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="accessibility" size={size} color={color} />
            ),
            tabBarBadge: num || null,
            }} />
        <Tabs.Screen 
          name="Other" 
          component={Other} 
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="send" size={size} color={color} />
            ),
            }} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

