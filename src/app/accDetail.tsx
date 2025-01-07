import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Step1 from '../components/steps/step1';
import Step2 from '../components/steps/step2';
import Step3 from '../components/steps/step3';
import Step4 from '../components/steps/step4';
import Step5 from '../components/steps/step5';
import ModalComponent from '../components/ModalComponent';

const rightArrow = require('../../assets/rightArrow.png');
const leftArrow = require('../../assets/leftArrow.png');

const MultiStepForm: React.FC = () => {
   const [step, setStep] = useState(1);
   const [gender, setGender] = useState<'Femenino' | 'Masculino' | ''>('');
   const [birthDate, setBirthDate] = useState('');
   const [height, setHeight] = useState<number | null>(null);
   const [weight, setWeight] = useState<number | null>(null);
   const [foodHabits, setFoodHabits] = useState('');
   const [exerciseHabits, setExerciseHabits] = useState('');
   const [sleepHabits, setSleepHabits] = useState('');
   const [selectedFamilyMember, setSelectedFamilyMember] = useState<string>('madre');
   const [selectedLoremOption, setSelectedLoremOption] = useState<string>('lorem_1');

   const [showModal, setShowModal] = useState(false);
   const [modalType, setModalType] = useState<'Fecha de nacimiento' | 'Altura' | 'Peso' | ''>('');
   const [tempValue, setTempValue] = useState<number | null>(null);

   const router = useRouter();

   const openModal = (type: 'Fecha de nacimiento' | 'Altura' | 'Peso') => {
      setModalType(type);
      setTempValue(null);
      setShowModal(true);
   };

   const handleModalConfirm = () => {
      if (modalType === 'Altura') setHeight(tempValue);
      if (modalType === 'Peso') setWeight(tempValue);
      if (modalType === 'Fecha de nacimiento') setBirthDate(tempValue ? `${tempValue}` : '');
      setShowModal(false);
   };

   const nextStep = () => {
      if (step === 5) {
         router.push('/login');
      } else {
         setStep((prevStep) => Math.min(prevStep + 1, 5));
      }
   };

   const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

   return (
      <ScrollView>
         <View className="flex-1 px-4 py-8">


            {step === 1 && (
               <Step1
                  gender={gender}
                  setGender={setGender}
                  birthDate={birthDate}
                  height={height}
                  weight={weight}
                  handleModalOpen={openModal}
                  setStep={setStep}
                  currentStep={1}
                  totalSteps={5}
               />
            )}
            {step === 2 && (
               <Step2
                  foodHabits={foodHabits}
                  setFoodHabits={setFoodHabits}
                  setStep={setStep}
                  currentStep={2}
                  totalSteps={5}
               />
            )}
            {step === 3 && (
               <Step3
                  exerciseHabits={exerciseHabits}
                  setExerciseHabits={setExerciseHabits}
                  setStep={setStep}
                  currentStep={3}
                  totalSteps={5}
               />
            )}
            {step === 4 && (
               <Step4
                  sleepHabits={sleepHabits}
                  setSleepHabits={setSleepHabits}
                  setStep={setStep}
                  currentStep={4}
                  totalSteps={5}
               />
            )}
            {step === 5 && (
               <Step5
                  selectedFamilyMember={selectedFamilyMember}
                  setSelectedFamilyMember={setSelectedFamilyMember}
                  selectedLoremOption={selectedLoremOption}
                  setSelectedLoremOption={setSelectedLoremOption}
                  setStep={setStep}
                  currentStep={5}
                  totalSteps={5}
               />
            )}


            <View className="flex-row justify-between mt-6">
               <TouchableOpacity
                  onPress={prevStep}
                  className="py-2 px-4 flex-row items-center"
                  disabled={step === 1}
               >
                  <Image source={leftArrow} className="w-4 h-4 mr-2" />
                  <Text className="text-center text-blue font-semibold">Volver</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={nextStep}
                  className="py-2 px-4 flex-row items-center"
               >
                  <Text className="text-center text-blue font-semibold">
                     {step === 5 ? 'Finalizar' : 'Siguiente'}
                  </Text>
                  <Image source={rightArrow} className="w-4 h-4 ml-2" />
               </TouchableOpacity>
            </View>


            <ModalComponent
               showModal={showModal}
               modalType={modalType}
               tempValue={tempValue}
               setTempValue={setTempValue}
               handleModalConfirm={handleModalConfirm}
            />
         </View>
      </ScrollView>
   );
};

export default MultiStepForm;
