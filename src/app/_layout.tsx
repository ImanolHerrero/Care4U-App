import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import TopNav from '../components/topNav';
import './../../global.css';

const Layout = () => {
      const pathname = usePathname();
      const excludedRoutes = ['/', '/login', '/recoverPassword', '/register', '/accDetail'];

      const isExcludedRoute = excludedRoutes.includes(pathname);

      return (
            <View className="flex-1">
                  {/* Status Bar */}
                  <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />

                  {!isExcludedRoute && <TopNav />}

                  <Slot />
            </View>
      );
};

export default Layout;
