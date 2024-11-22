import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      
      
         <Drawer.Screen name="index" />
         <Drawer.Screen name="Profile" />
         <Drawer.Screen name="User" />

      </Drawer>
    </GestureHandlerRootView>
  );
}
