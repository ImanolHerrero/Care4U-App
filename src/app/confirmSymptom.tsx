import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const confirmSymptom = () => {
   const router = useRouter(); // Hook para manejar la navegación

   const okIcon = require('../../assets/okIcon.png');
   const cocodrilo = require('../../assets/cocodrilo.png');

   return (
      <View className="py-8 px-8">
         <View className="flex flex-col gap-8 items-center justify-center mt-16">
            <Image source={okIcon} resizeMode="contain" />

            <Text>Síntoma registrado</Text>

            <Image source={cocodrilo} resizeMode="contain" />

            <TouchableOpacity
               className="bg-blue py-3 w-full rounded-full items-center"
               onPress={() => router.push('/registerSymptom')}
            >
               <Text className="text-white text-lg">Registrar otro síntoma</Text>
            </TouchableOpacity>

            <TouchableOpacity
               className="text-center underline underline-offset-4 decoration-2 text-xl mt-6"
               onPress={() => router.push('/home')}
            >
               <Text className="text-lg font-bold">Salir</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default confirmSymptom;
