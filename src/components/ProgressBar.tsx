import React from 'react';
import { View, Text } from 'react-native';

interface ProgressBarProps {
   currentStep: number;
   totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
   const progressPercentage = (currentStep / totalSteps) * 100;

   return (
      <View className="w-full my-4 flex-row items-center">
         <View className="flex-1 h-4 bg-red rounded-full overflow-hidden">
            <View
               className="h-full bg-deepRed"
               style={{ width: `${progressPercentage}%` }}
            />
         </View>
         <Text className="ml-2">
            {currentStep}/{totalSteps}
         </Text>
      </View>
   );
};

export default ProgressBar;
