import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Home } from "./src/pages/Home";
import { Member } from "./src/pages/Member";
import { Other } from "./src/pages/Other";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home"
          component={Home} 
          options={{
              title: "Homey",
              headerStyle: { backgroundColor: "#333399"},
              headerRight: ({tintColor}) => (
                <View style={{padding: 5}}>
                  <Ionicons 
                    color={tintColor} 
                    name="person" 
                    style={{marginLeft: 3}} 
                  />
                </View>
              ),
              headerTintColor: "#fff",
              drawerContentStyle: {backgroundColor: "#9999ff"},
              drawerLabel: "to my home",
              drawerIcon: ({focused, size, color}) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
            />
        <Drawer.Screen name="Member" component={Member} />
        <Drawer.Screen name="Other" component={Other} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}