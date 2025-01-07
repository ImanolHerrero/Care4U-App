import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { resetPasswordGetCode } from '../utils/scripts';
import { useRouter } from 'expo-router';

export default function RecoverPassword() {
   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);
   const [isFocused, setIsFocused] = useState(false);
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
         router.push({
            pathname: '/codePassword',
            params: { email },
         });
      } else {
         console.log('Error', result.message);
      }
   };

   return (
      <View className="flex flex-col justify-center px-8 py-8">
         <Text className="text-blue font-bold text-center text-2xl mb-2 mt-8">
            Recuperación de la cuenta
         </Text>

         <Text className="text-center mb-16">
            ¡No te preocupes! Nos suele suceder a todos.
         </Text>

         <Text className="font-semibold mb-6">Ingresa tu correo electrónico</Text>
         <TextInput
            style={[
               styles.input,
               isFocused && styles.inputFocused,
            ]}
            className="rounded-full p-3 text-base"
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType="email-address"
         />

         <TouchableOpacity
            onPress={handleRecover}
            disabled={loading}
            className={`py-3 rounded-full mt-6 ${loading ? 'bg-blue/70' : 'bg-blue'}`}
         >
            <Text className="text-white text-center font-semibold">
               {loading ? 'Cargando...' : 'Recuperar'}
            </Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: '#d1d5db',
   },
   inputFocused: {
      borderColor: '#0F679B',
      borderWidth: 2,
   },
});
