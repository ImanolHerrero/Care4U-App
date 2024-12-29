import { View, Text, Image } from 'react-native';
import React from 'react';

const defaultIcon = require('../../assets/defaultIcon.png');

const TopNav = () => {
   const userName = 'Usuario';

   return (
      <View className="bg-blue py-6 px-4 flex-row items-center space-x-4">

         <Image source={defaultIcon} resizeMode="cover" />

         <View>
            <Text className="text-lg text-gray-300">Bienvenido</Text>
            <Text className="text-xl font-bold text-white">{userName}</Text>
         </View>
      </View>
   );
};

export default TopNav;
