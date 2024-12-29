import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import SplashScreen from '../components/SplashScreen';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
   const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setIsShowSplashScreen(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
   }, []);

   const router = useRouter();

   const data = [
      {
         title: 'Conoce tu bienestar',
         subtitle: 'Explora tu bienestar y obtén información vital sobre tu salud a través de nuestra aplicación.',
         image: 'https://example.com/wellness-image.png',
      },
      {
         title: 'Tomando el control de tu salud',
         subtitle: 'Nuestra aplicación te ayuda a detectar y gestionar enfermedades crónicas.',
         image: 'https://example.com/health-control-image.png',
      },
      {
         title: 'Salud en tus manos',
         subtitle: 'Utilizamos tecnología para proporcionarte consejos y seguimiento precisos.',
         image: 'https://example.com/health-tips-image.png',
      },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <View className="flex-1 justify-between">
         {isShowSplashScreen ? (
            <SplashScreen />
         ) : (
            <>
               <View className="flex-1 justify-center items-center">
                  <Carousel data={data} currentIndex={currentIndex} />

                  <View className="flex-row justify-center items-center mt-4 space-x-2">
                     {data.map((_, index) => (
                        <View
                           key={index}
                           className={`w-8 h-2 mx-1 rounded-lg ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                              }`}
                        />
                     ))}
                  </View>
               </View>

               <View className="w-full px-6 mb-40">
                  <TouchableOpacity
                     onPress={() => router.push('/login')}
                     className="bg-blue py-3 px-6 rounded-full mb-4"
                  >
                     <Text className="text-white text-center text-lg">Ingresar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => router.push('/register')}
                     className="bg-white border border-blue py-3 px-6 rounded-full"
                  >
                     <Text className="text-blue text-center text-lg">Registrarse</Text>
                  </TouchableOpacity>
               </View>
            </>
         )}
      </View>
   );
};

export default HomeScreen;
