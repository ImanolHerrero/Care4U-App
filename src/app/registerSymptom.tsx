import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RegisterSymptom() {
   const [inputText, setInputText] = useState<string>('');
   const [symptoms, setSymptoms] = useState<string[]>([]);
   const router = useRouter();

   const getCurrentDate = () => {
      const date = new Date();
      return date.toLocaleDateString('es-ES', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });
   };

   const handleSubmit = () => {
      if (inputText.trim() === '') return;
      setSymptoms([...symptoms, inputText.trim()]);
      setInputText('');
   };

   const handleNextStep = () => {
      router.push('/finishSymptom');
   };

   return (
      <View className="flex-1">
         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 py-8 px-8">
               <Text className="text-blue font-bold text-center text-2xl mb-4">
                  {getCurrentDate()}
               </Text>

               <TextInput
                  placeholder="Describe tu síntoma aquí..."
                  value={inputText}
                  onChangeText={setInputText}
                  className="border border-gray-300 rounded-lg p-3 mb-4"
               />

               <TouchableOpacity
                  onPress={handleSubmit}
                  className="bg-blue py-3 rounded-lg mb-6"
               >
                  <Text className="text-white text-center font-semibold">
                     Registrar síntoma
                  </Text>
               </TouchableOpacity>

               {symptoms.length > 0 && (
                  <View className="mt-6">
                     <Text className="font-bold text-gray-700 mb-2">
                        Síntomas registrados:
                     </Text>
                     <FlatList
                        data={symptoms}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                           <Text className="text-gray-700">
                              {index + 1}. {item}
                           </Text>
                        )}
                     />
                  </View>
               )}
            </View>
         </ScrollView>

         <TouchableOpacity
            onPress={handleNextStep}
            className="bg-blue py-3 rounded-lg mt-auto absolute bottom-8 left-8 right-8"
         >
            <Text className="text-white text-center font-semibold">
               Continuar
            </Text>
         </TouchableOpacity>
      </View>
   );
}
