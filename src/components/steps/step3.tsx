import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from '../ProgressBar';

type Step3Props = {
   exerciseHabits: string;
   setExerciseHabits: (answer: string) => void;
   setStep: (step: number) => void;
   currentStep: number;
   totalSteps: number;
};

const Step3: React.FC<Step3Props> = ({ exerciseHabits, setExerciseHabits, setStep,
   currentStep,
   totalSteps }) => {
   return (
      <View>
         <View className='mb-8'>
            <Text className="text-center font-bold text-2xl mb-4 text-blue">¿Cómo es tu estilo de vida?</Text>
            <Text className='text-center text-lg'>
               Ya falta poco, es importante conocer sobre tus hábito y rutina del día a día.
            </Text>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
         </View>
         {/* Nueva Pregunta: Hábitos de ejercicio */}
         <Text className="text-lg mb-6">¿Qué acciones tomas para mantener un estilo de vida saludable?</Text>
         <View className="flex-col mb-6">
            {/* Opción 1 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setExerciseHabits('Realizo ejercicio regularmente.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${exerciseHabits === 'Realizo ejercicio regularmente.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${exerciseHabits === 'Realizo ejercicio regularmente.' ? 'text-blue' : 'text-black'}`}>Realizo ejercicio regularmente.</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 2 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setExerciseHabits('Sigo una dieta equilibrada y rica en frutas y verduras.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${exerciseHabits === 'Sigo una dieta equilibrada y rica en frutas y verduras.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${exerciseHabits === 'Sigo una dieta equilibrada y rica en frutas y verduras.' ? 'text-blue' : 'text-black'}`}>Sigo una dieta equilibrada y rica en frutas y verduras.</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 3 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setExerciseHabits('Evito el consumo excesivo de alcohol y tabaco.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${exerciseHabits === 'Evito el consumo excesivo de alcohol y tabaco.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${exerciseHabits === 'Evito el consumo excesivo de alcohol y tabaco.' ? 'text-blue' : 'text-black'}`}>Evito el consumo excesivo de alcohol y tabaco.</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 4 */}
            <View className="border border-gray-200 rounded-xl p-4">
               <TouchableOpacity
                  onPress={() => setExerciseHabits('Hago chequeos médicos preventivos periódicos.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${exerciseHabits === 'Hago chequeos médicos preventivos periódicos.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${exerciseHabits === 'Hago chequeos médicos preventivos periódicos.' ? 'text-blue' : 'text-black'}`}>Hago chequeos médicos preventivos periódicos.</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

export default Step3;
