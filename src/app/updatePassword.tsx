import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { updatePassword } from '../utils/scripts';

export default function UpdatePassword() {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [isFocusedPassword, setIsFocusedPassword] = useState(false);
   const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false);

   const router = useRouter();
   const { email, code } = useLocalSearchParams();

   const emailString = Array.isArray(email) ? email[0] : email;
   const codeNumber = Number(code);
   console.log(codeNumber);

   const handleUpdatePassword = async () => {
      console.log('Iniciando actualización de contraseña...');

      if (password !== confirmPassword) {
         console.log('Las contraseñas no coinciden.');
         return;
      }

      if (password.length < 6) {
         console.log('La contraseña debe tener al menos 6 caracteres.');
         return;
      }

      console.log('Validación exitosa, realizando la solicitud para actualizar la contraseña...');

      setLoading(true);
      const result = await updatePassword(emailString, codeNumber, password);
      setLoading(false);

      if (result.success) {
         console.log('Contraseña actualizada exitosamente.');
         router.push('/login');
      } else {
         console.log('Error al actualizar la contraseña:', result.message);
      }
   };

   return (
      <View className="py-8 px-8">
         <Text className="text-blue font-bold text-center text-2xl mb-2 mt-8">
            Cambia tu contraseña
         </Text>
         <Text className="text-center mb-8">Ya puedes cambiar tu contraseña</Text>

         <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[
               styles.input,
               isFocusedPassword && styles.inputFocused,
            ]}
            className="rounded-full p-3 mb-6"
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
         />

         <TextInput
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={[
               styles.input,
               isFocusedConfirmPassword && styles.inputFocused,
            ]}
            className="rounded-full p-3 mb-6"
            onFocus={() => setIsFocusedConfirmPassword(true)}
            onBlur={() => setIsFocusedConfirmPassword(false)}
         />

         <TouchableOpacity
            onPress={handleUpdatePassword}
            disabled={loading}
            className={`py-3 rounded-full ${loading ? 'bg-blue/70' : 'bg-blue'}`}
         >
            <Text className="text-white text-center font-semibold">
               {loading ? 'Actualizando...' : 'Cambiar contraseña'}
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
