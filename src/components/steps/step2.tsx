import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from '../ProgressBar';

type Step2Props = {
   foodHabits: string;
   setFoodHabits: (answer: string) => void;
   setStep: (step: number) => void;
   currentStep: number; // Ya está definido aquí
   totalSteps: number;  // Ya está definido aquí
};

const Step2: React.FC<Step2Props> = ({ foodHabits, setFoodHabits, setStep, currentStep, totalSteps }) => {
   return (
      <View>
         <View className='mb-8'>
            <Text className="text-center font-bold text-2xl mb-4 text-blue">¿Cómo es tu estilo de vida?</Text>
            <Text className='text-center text-lg'>
               Ya falta poco, es importante conocer sobre tus hábito y rutina del día a día.
            </Text>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
         </View>
         {/* Nueva Pregunta: Hábitos alimenticios */}
         <Text className="text-lg mb-6">¿Cuáles son tus hábitos alimenticios y preferencias dietéticas?</Text>
         <View className="flex-col mb-6">
            {/* Opción 1 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setFoodHabits('Comida rápida y ocasionalmente casera')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${foodHabits === 'Comida rápida y ocasionalmente casera' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${foodHabits === 'Comida rápida y ocasionalmente casera' ? 'text-blue' : 'text-black'}`}>Comida rápida y ocasionalmente casera</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 2 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setFoodHabits('Dietas equilibradas con énfasis en alimentos frescos')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${foodHabits === 'Dietas equilibradas con énfasis en alimentos frescos' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${foodHabits === 'Dietas equilibradas con énfasis en alimentos frescos' ? 'text-blue' : 'text-black'}`}>Dietas equilibradas con énfasis en alimentos frescos</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 3 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setFoodHabits('Comidas principalmente a base de proteínas')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${foodHabits === 'Comidas principalmente a base de proteínas' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${foodHabits === 'Comidas principalmente a base de proteínas' ? 'text-blue' : 'text-black'}`}>Comidas principalmente a base de proteínas</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 4 */}
            <View className="border border-gray-200 rounded-xl p-4">
               <TouchableOpacity
                  onPress={() => setFoodHabits('Vegetariano o vegano')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${foodHabits === 'Vegetariano o vegano' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${foodHabits === 'Vegetariano o vegano' ? 'text-blue' : 'text-black'}`}>Vegetariano o vegano</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

export default Step2;
