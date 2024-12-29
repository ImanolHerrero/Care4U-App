import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function FinishSymptom() {
   const [selectedOption, setSelectedOption] = useState<number | null>(null);
   const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
   const router = useRouter();

   const options = [
      { id: 1, label: 'Leve', image: require('../../assets/emoji/emoji1.png') },
      { id: 2, label: 'Moderado', image: require('../../assets/emoji/emoji2.png') },
      { id: 3, label: 'Severo', image: require('../../assets/emoji/emoji3.png') },
      { id: 4, label: 'Muy severo', image: require('../../assets/emoji/emoji4.png') },
      { id: 5, label: 'Máximo', image: require('../../assets/emoji/emoji5.png') },
   ];

   const durations = [
      { id: 1, label: 'Menos de un día' },
      { id: 2, label: 'De un día a una semana' },
      { id: 3, label: 'De una semana a un mes' },
      { id: 4, label: 'De un mes a un año' },
      { id: 5, label: 'Más de un año' },
   ];

   const getCurrentDate = () => {
      const date = new Date();
      return date.toLocaleDateString('es-ES', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });
   };

   const handleRegisterSymptom = () => {
      if (selectedOption && selectedDuration) {
         router.push('/confirmSymptom');
      } else {
         alert('Por favor selecciona una opción de dolor y duración.');
      }
   };

   return (
      <ScrollView className="flex-1 py-8 px-8">
         <View>
            <Text className="text-blue font-bold text-center text-2xl mb-4">
               {getCurrentDate()}
            </Text>
         </View>

         <View>
            <Text className="text-lg font-semibold mb-4">¿Cómo calificarías este dolor?</Text>
            <View className="flex-wrap flex-row items-center justify-center border border-gray-200 rounded-xl p-4">
               {options.map((option) => (
                  <TouchableOpacity
                     key={option.id}
                     className="items-center p-2"
                     onPress={() => setSelectedOption(option.id)}
                  >
                     <View
                        className={`rounded-full p-1 ${selectedOption === option.id ? 'border-4 border-blue' : 'border-2 border-transparent'
                           }`}
                     >
                        <Image
                           source={option.image}
                           className="w-16 h-16"
                           resizeMode="contain"
                        />
                     </View>
                     <Text className={`text-base mt-2 ${selectedOption === option.id ? 'text-blue-500' : 'text-gray-700'}`}>
                        {option.label}
                     </Text>
                  </TouchableOpacity>
               ))}
            </View>
         </View>

         <View className="mt-8">
            <Text className="text-lg font-semibold mb-4">¿Desde cuándo tienes esta molestia?</Text>
            <View className="border border-gray-200 rounded-xl p-4">
               {durations.map((duration) => (
                  <TouchableOpacity
                     key={duration.id}
                     onPress={() => setSelectedDuration(duration.id)}
                     className="flex-row items-center mb-4"
                  >
                     <View
                        className={`w-5 h-5 border-2 rounded-full mr-3 ${selectedDuration === duration.id ? 'bg-blue' : 'bg-white'
                           }`}
                     />
                     <Text
                        className={`text-base ${selectedDuration === duration.id ? 'text-blue-500 font-semibold' : 'text-gray-700'}`}
                     >
                        {duration.label}
                     </Text>
                  </TouchableOpacity>
               ))}
            </View>
         </View>

         <View className="mt-8">
            <TouchableOpacity
               onPress={handleRegisterSymptom}
               className="bg-blue py-3 rounded-full items-center"
            >
               <Text className="text-white text-lg ">Registrar síntoma</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
}
