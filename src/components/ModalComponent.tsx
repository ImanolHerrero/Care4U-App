import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type ModalComponentProps = {
   showModal: boolean;
   modalType: 'Fecha de nacimiento' | 'Altura' | 'Peso' | '';
   tempValue: number | null;
   setTempValue: (value: number) => void;
   handleModalConfirm: () => void;
};

const ModalComponent: React.FC<ModalComponentProps> = ({ showModal, modalType, tempValue, setTempValue, handleModalConfirm }) => {
   return (
      <Modal transparent={true} visible={showModal} animationType="slide" onRequestClose={() => { }}>
         <View className="flex-1 justify-end">
            <View className="absolute inset-0 bg-black opacity-50" />
            <View className="bg-white p-4 rounded-t-lg">
               <Text className="text-center font-bold text-lg mb-2">Seleccionar {modalType}</Text>
               <Picker selectedValue={tempValue} onValueChange={(itemValue) => setTempValue(Number(itemValue))}>
                  {modalType === 'Fecha de nacimiento' &&
                     Array.from({ length: 50 }, (_, i) => i + 1970).map((year) => (
                        <Picker.Item key={year} label={`${year}`} value={year} />
                     ))}
                  {modalType === 'Altura' &&
                     Array.from({ length: 200 }, (_, i) => i + 100).map((cm) => (
                        <Picker.Item key={cm} label={`${cm} cm`} value={cm} />
                     ))}
                  {modalType === 'Peso' &&
                     Array.from({ length: 200 }, (_, i) => i + 20).map((kg) => (
                        <Picker.Item key={kg} label={`${kg} kg`} value={kg} />
                     ))}
               </Picker>
               <TouchableOpacity onPress={handleModalConfirm} className="bg-blue py-3 rounded-md mt-4">
                  <Text className="text-center text-white font-bold">Confirmar</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
};

export default ModalComponent;
