import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from '../ProgressBar';

type Step4Props = {
   sleepHabits: string;
   setSleepHabits: (answer: string) => void;
   setStep: (step: number) => void;
   currentStep: number;
   totalSteps: number;

};

const Step4: React.FC<Step4Props> = ({ sleepHabits, setSleepHabits, setStep,
   currentStep,
   totalSteps }) => {
   return (
      <View>
         <View className='mb-8'>
            <Text className="text-center font-bold text-2xl mb-4 text-blue">¿Cuál es tu enfoque hacia el descanso y el sueño?</Text>
            <Text className='text-center text-lg'>
               El descanso adecuado es clave para mantener una buena salud y bienestar.
            </Text>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
         </View>
         {/* Nueva Pregunta: Hábitos de sueño */}
         <Text className="text-lg mb-6">Selecciona la opción que mejor describe tus hábitos:</Text>
         <View className="flex-col mb-6">
            {/* Opción 1 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setSleepHabits('Mantengo una rutina de sueño constante y duermo lo suficiente.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${sleepHabits === 'Mantengo una rutina de sueño constante y duermo lo suficiente.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${sleepHabits === 'Mantengo una rutina de sueño constante y duermo lo suficiente.' ? 'text-blue' : 'text-black'}`}>Mantengo una rutina de sueño constante y duermo lo suficiente.</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 2 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setSleepHabits('A veces sacrifico horas de sueño por el trabajo o el ocio.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${sleepHabits === 'A veces sacrifico horas de sueño por el trabajo o el ocio.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${sleepHabits === 'A veces sacrifico horas de sueño por el trabajo o el ocio.' ? 'text-blue' : 'text-black'}`}>A veces sacrifico horas de sueño por el trabajo o el ocio.</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 3 */}
            <View className="border border-gray-200 rounded-xl p-4 mb-4">
               <TouchableOpacity
                  onPress={() => setSleepHabits('Evito la cafeína y la pantalla antes de acostarme.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${sleepHabits === 'Evito la cafeína y la pantalla antes de acostarme.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${sleepHabits === 'Evito la cafeína y la pantalla antes de acostarme.' ? 'text-blue' : 'text-black'}`}>Evito la cafeína y la pantalla antes de acostarme.</Text>
               </TouchableOpacity>
            </View>
            {/* Opción 4 */}
            <View className="border border-gray-200 rounded-xl p-4">
               <TouchableOpacity
                  onPress={() => setSleepHabits('Utilizo técnicas de relajación para conciliar el sueño.')}
                  className="flex-row items-center"
               >
                  <View className={`w-5 h-5 border-2 rounded-full ${sleepHabits === 'Utilizo técnicas de relajación para conciliar el sueño.' ? 'bg-blue' : 'bg-white'} mr-2`} />
                  <Text className={`${sleepHabits === 'Utilizo técnicas de relajación para conciliar el sueño.' ? 'text-blue' : 'text-black'}`}>Utilizo técnicas de relajación para conciliar el sueño.</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

export default Step4;
