import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ProgressBar from '../ProgressBar';

type Step5Props = {
   selectedFamilyMember: string;
   setSelectedFamilyMember: (value: string) => void;
   selectedLoremOption: string;
   setSelectedLoremOption: (value: string) => void;
   setStep: (step: number) => void;
   currentStep: number;
   totalSteps: number;
};

const Step5: React.FC<Step5Props> = ({
   selectedFamilyMember,
   setSelectedFamilyMember,
   selectedLoremOption,
   setSelectedLoremOption,
   setStep,
   currentStep,
   totalSteps,
}) => {
   return (
      <View>
         <View className="mb-8">
            <Text className="text-center font-bold text-2xl mb-4 text-blue">
               Antecedentes
            </Text>
            <Text className="text-center text-lg">
               Saber los antecedentes familiares nos ayuda a prevenir enfermedades y tratarlas a tiempo.
            </Text>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
         </View>

         {/* Picker: Familiares */}
         <Text className="text-lg mb-4">Selecciona un familiar</Text>
         <View className="border border-gray-200 rounded-xl mb-6">
            <Picker
               selectedValue={selectedFamilyMember}
               onValueChange={(itemValue) => setSelectedFamilyMember(itemValue)}
               style={{ height: 50, width: '100%' }}
            >
               <Picker.Item label="Madre" value="madre" />
               <Picker.Item label="Padre" value="padre" />
               <Picker.Item label="Abuelo paterno" value="abuelo_paterno" />
               <Picker.Item label="Abuelo materno" value="abuelo_materno" />
               <Picker.Item label="Tíos maternos" value="tios_maternos" />
               <Picker.Item label="Tíos paternos" value="tios_paternos" />
            </Picker>
         </View>

         {/* Picker: Lorem Ipsum */}
         <Text className="text-lg mb-4">Selecciona una enfermedad</Text>
         <View className="border border-gray-200 rounded-xl mb-6">
            <Picker
               selectedValue={selectedLoremOption}
               onValueChange={(itemValue) => setSelectedLoremOption(itemValue)}
               style={{ height: 50, width: '100%' }}
            >
               <Picker.Item label="Lorem ipsum 1" value="lorem_1" />
               <Picker.Item label="Lorem ipsum 2" value="lorem_2" />
               <Picker.Item label="Lorem ipsum 3" value="lorem_3" />
               <Picker.Item label="Lorem ipsum 4" value="lorem_4" />
               <Picker.Item label="Lorem ipsum 5" value="lorem_5" />
            </Picker>
         </View>
      </View>
   );
};

export default Step5;
