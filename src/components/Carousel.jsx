import React from 'react';
import { View, Text, Image } from 'react-native';
import StaticImage from "../../assets/splash.png";
import { StyleSheet } from 'react-native';

const Carousel = ({ data, currentIndex }) => {
   return (
      <View className="p-6 w-full max-w-lg mb-6">
         <View className="flex justify-center items-center">
            <View className='p-8 rounded-3xl bg-blue mb-6'>

               <Image
                  source={StaticImage}
                  className="w-32 h-32"
                  resizeMode="contain"
               />
            </View>
            <Text className="text-3xl text-blue font-bold text-center mb-4" style={styles.redHatText}>
               {data[currentIndex].title}
            </Text>
            <Text className="text-xl text-gray-600 text-center">
               {data[currentIndex].subtitle}
            </Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   redHatText: {
      fontFamily: 'RedHatDisplay_700Bold',
      fontSize: 24,
   },
   nunitoText: {
      fontFamily: 'Nunito_400Regular',
      fontSize: 20,
   },
});

export default Carousel;
