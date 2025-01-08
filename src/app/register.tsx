import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { registerUser } from '../utils/scripts';

export default function Register() {
   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [focusedInput, setFocusedInput] = useState<string | null>(null);
   const [passwordVisible, setPasswordVisible] = useState(false);
   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

   const eyesIcon = require('../../assets/eyesIcon.png');

   async function handleRegister() {
      if (password !== confirmPassword) {
         console.log('Error: Las contraseñas no coinciden');
         return;
      }

      const result = await registerUser(name, lastName, email, password);

      if (result.success) {
         console.log('Éxito:', result.message);
         router.push('/accDetail');
      } else {
         console.log('Error:', result.message);
      }
   }

   const inputFields = [
      { id: 'name', placeholder: 'Nombre', value: name, onChangeText: setName },
      { id: 'lastName', placeholder: 'Apellido', value: lastName, onChangeText: setLastName },
      {
         id: 'email',
         placeholder: 'Correo electrónico',
         value: email,
         onChangeText: setEmail,
         keyboardType: 'email-address' as 'email-address',
         autoCapitalize: 'none' as 'none',
         autoCorrect: false,
      },
      {
         id: 'password',
         placeholder: 'Contraseña',
         value: password,
         onChangeText: setPassword,
         secureTextEntry: !passwordVisible,
      },
      {
         id: 'confirmPassword',
         placeholder: 'Confirma tu contraseña',
         value: confirmPassword,
         onChangeText: setConfirmPassword,
         secureTextEntry: !confirmPasswordVisible,
      },
   ];

   return (
      <View className="flex flex-col justify-center items-center px-8 py-8">
         <View>
            <Text className="text-4xl text-blue font-semibold text-center mb-4">Crea tu cuenta</Text>
            <Text className="text-center text-xl">
               Regístrate con tu correo electrónico o ingresa con tus cuentas.
            </Text>
         </View>

         <View className="w-full mt-16">
            <Text className="font-semibold text-lg mb-4">Ingresa tus datos para registrarte.</Text>

            {/** Inputs Section */}
            {inputFields.map((input) => (
               <View key={input.id} className="mb-4 w-full">
                  <TextInput
                     {...input}
                     style={[styles.input, ...(focusedInput === input.id ? [styles.inputFocused] : [])]}
                     className="rounded-full px-4 py-3 text-base"
                     onFocus={() => setFocusedInput(input.id)}
                     onBlur={() => setFocusedInput(null)}
                  />
                  {(input.id === 'password' || input.id === 'confirmPassword') && (
                     <TouchableOpacity
                        onPress={() =>
                           input.id === 'password'
                              ? setPasswordVisible((prev) => !prev)
                              : setConfirmPasswordVisible((prev) => !prev)
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                     >
                        <Image
                           source={eyesIcon}
                           style={{ width: 24, height: 24 }}
                        />
                     </TouchableOpacity>
                  )}
               </View>
            ))}
         </View>

         <TouchableOpacity onPress={handleRegister} className="bg-blue py-3 rounded-full mt-8 w-full">
            <Text className="text-white text-center text-lg">Registrarme</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => router.push('/login')} className="mt-8">
            <Text className="text-center text-lg font-semibold">
               ¿Ya tienes una cuenta? Ingresar
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
