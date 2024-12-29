import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { resetPasswordGetCode } from '../utils/scripts';
import { useRouter } from 'expo-router';

export default function RecoverPassword() {
   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const handleRecover = async () => {
      if (!email) {
         console.log('Error', 'Por favor, ingresa tu correo electrónico.');
         return;
      }

      setLoading(true);
      const result = await resetPasswordGetCode(email);
      setLoading(false);

      if (result.success) {
         console.log('Éxito', result.message);
         router.push('/codePassword');
      } else {
         console.log('Error', result.message);
      }
   };

   return (
      <View className="py-8 px-8">
         <Text className="text-blue font-bold text-center text-2xl mb-2 mt-8">
            Recuperación de la cuenta
         </Text>

         <Text className="text-center mb-16">
            ¡No te preocupes! Nos suele suceder a todos.
         </Text>

         <Text className="font-semibold mb-6">
            Ingresa tu correo electrónico
         </Text>
         <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            className="border border-gray-300 rounded-full p-3 mb-6"
            keyboardType="email-address"
         />

         <TouchableOpacity
            onPress={handleRecover}
            disabled={loading}
            className={`py-3 rounded-full ${loading ? 'bg-blue/70' : 'bg-blue'}`}
         >
            <Text className="text-white text-center font-semibold">
               {loading ? 'Cargando...' : 'Recuperar'}
            </Text>
         </TouchableOpacity>
      </View>
   );
}
