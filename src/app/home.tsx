import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import CalendarComponent from '../components/Calendar';

const cocodrilo = require('../../assets/cocodrilo.png');
const medIcon = require('../../assets/medIcon.png');
const arrowIcon = require('../../assets/arrowIcon.png');

export default function Home() {
   const [selectedDate, setSelectedDate] = useState(null);

   const opciones = [
      'Registra tus síntomas',
      'Relación entre genética y salud',
      'Probabilidades de desarrollar cáncer',
      'La alimentación',
   ];

   const router = useRouter();

   const handleRegisterSymptom = () => {
      router.push('/registerSymptom');
   };

   return (
      <ScrollView>

         <View className="flex flex-row items-center justify-between px-4 py-8 bg-blue rounded-bl-3xl rounded-br-3xl">
            <Image source={cocodrilo} className="w-40 h-40 rounded-lg" resizeMode="contain" />

            <View className="flex-1 px-4">
               <Text className="text-3xl font-bold text-white mb-4 text-right">
                  Hola, <Text className="text-red">soy lorem</Text>
               </Text>
               <Text className="text-xl text-white text-right">
                  Tu asistente virtual, juntos realizaremos un seguimiento de tu salud.
               </Text>
            </View>
         </View>

         <View className="mt-8 bg-red mx-4 rounded-xl flex-row items-center justify-between p-4">
            <Image source={medIcon} className="w-12 h-8" resizeMode="contain" />

            <Text className="text-center text-lg flex-1">
               <Text className="font-bold">¡Cambia de plan!</Text> Pulsa para descubrir esta oferta exclusiva para ti.
            </Text>

            <Image source={arrowIcon} className="w-4 h-4" resizeMode="contain" />
         </View>

         <View className="mt-8">
            <Text className="text-xl font-bold mb-4 mx-4">Consejos diseñados para ti</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-4">
               {opciones.map((opcion, index) => (
                  <View
                     key={index}
                     className="w-40 h-32 border border-blue rounded-lg items-center justify-center mx-2"
                  >
                     <Text className="text-sm font-semibold text-center p-2">{opcion}</Text>

                     {index === 0 && (
                        <TouchableOpacity
                           onPress={handleRegisterSymptom}
                           className="w-10 h-10 bg-deepBlue rounded-full items-center justify-center"
                        >
                           <Text className="text-white text-3xl">+</Text>
                        </TouchableOpacity>
                     )}
                  </View>
               ))}
            </ScrollView>
            <Text className="text-center font-bold underline underline-offset-4 decoration-2 text-xl mt-6">Ver más</Text>
         </View>
         <View className="mt-8">
            <Text className="text-xl font-bold mb-4 mx-4">Diario de síntomas</Text>
            <CalendarComponent
               onDayPress={(day) => setSelectedDate(day.dateString)}
               markedDates={{
                  [selectedDate]: { selected: true, selectedColor: 'blue' },
               }}
            />
         </View>
      </ScrollView>
   );
}
