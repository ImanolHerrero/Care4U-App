import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ProgressBar from '../ProgressBar';
const genderIcon = require('../../../assets/genderIcon.png');
const calendarIcon = require('../../../assets/calendarIcon.png');
const heightIcon = require('../../../assets/height.png');
const weightIcon = require('../../../assets/weight.png');

// Define los props de tu Step1
type Step1Props = {
   gender: 'Femenino' | 'Masculino' | '';
   birthDate: string;
   height: number | null;
   weight: number | null;
   handleModalOpen: (type: 'Fecha de nacimiento' | 'Altura' | 'Peso') => void;
   setGender: (gender: 'Femenino' | 'Masculino' | '') => void;
   setStep: (step: number) => void;
   currentStep: number;
   totalSteps: number;
};


const Step1: React.FC<Step1Props> = ({ gender,
   birthDate,
   height,
   weight,
   handleModalOpen,
   setGender,
   setStep,
   currentStep,
   totalSteps, }) => {
   return (
      <View>
         <View className='mb-8'>
            <Text className="text-center font-bold text-2xl mb-4 text-blue">Ya casi estamos listos.</Text>
            <Text className='text-center text-lg'>
               Cúentame un poco más de ti, mientras más información tenga, seré más preciso con tu salud.
            </Text>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
         </View>

         {/* Sexo */}
         <View className="flex-col mb-6 border border-gray-200 rounded-xl p-4">
            <View className='flex flex-row items-center mb-6 gap-2'>
               <Image source={genderIcon} className="w-6 h-6" />
               <Text className="text-xl">Sexo</Text>
            </View>
            <View>
               <View className="flex-row">
                  <TouchableOpacity onPress={() => setGender('Femenino')} className="flex-row items-center mr-4">
                     <View
                        className={`w-5 h-5 border-2 rounded-full ${gender === 'Femenino' ? 'bg-blue' : 'bg-white'} mr-2`}
                     />
                     <Text className={`${gender === 'Femenino' ? 'text-blue' : 'text-black'}`}>Femenino</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setGender('Masculino')} className="flex-row items-center">
                     <View
                        className={`w-5 h-5 border-2 rounded-full ${gender === 'Masculino' ? 'bg-blue' : 'bg-white'} mr-2`}
                     />
                     <Text className={`${gender === 'Masculino' ? 'text-blue' : 'text-black'}`}>Masculino</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>

         {/* Fecha de Nacimiento */}
         <View className="flex-col mb-6 border border-gray-200 rounded-xl p-4">
            <View className='flex flex-row items-center mb-6 gap-2'>
               <Image source={calendarIcon} className="w-6 h-6 " />
               <Text className="text-xl">Fecha de nacimiento</Text>
            </View>
            <View>
               <TouchableOpacity
                  onPress={() => handleModalOpen('Fecha de nacimiento')}
                  className="border border-gray-300 p-2 rounded-md"
               >
                  <Text>{birthDate || 'Selecciona tu fecha de nacimiento'}</Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* Estatura */}
         <View className="flex-col mb-6 border border-gray-200 rounded-xl p-4">
            <View className='flex flex-row items-center mb-6 gap-2'>
               <Image source={heightIcon} className="w-6 h-6" />
               <Text className="text-xl">Estatura (cm)</Text>
            </View>
            <View>
               <TouchableOpacity
                  onPress={() => handleModalOpen('Altura')}
                  className="border border-gray-300 p-2 rounded-md"
               >
                  <Text>{height ? `${height} cm` : 'Introduce tu estatura'}</Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* Peso */}
         <View className="flex-col mb-6 border border-gray-200 rounded-xl p-4">
            <View className='flex flex-row items-center mb-6 gap-2'>
               <Image source={weightIcon} className="w-6 h-6" />
               <Text className="text-xl">Peso (kg)</Text>
            </View>
            <View>
               <TouchableOpacity
                  onPress={() => handleModalOpen('Peso')}
                  className="border border-gray-300 p-2 rounded-md"
               >
                  <Text>{weight ? `${weight} kg` : 'Introduce tu peso'}</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

export default Step1;
