import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { registerUser } from '../utils/scripts';

export default function Register() {
   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

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

   return (
      <View className="flex flex-col justify-center items-center px-8 py-8">
         <View>
            <Text className="text-4xl text-blue font-semibold text-center mb-4">Crea tu cuenta</Text>
            <Text className="text-center text-xl">Regístrate con tu correo electrónico o ingresa con tus cuentas.</Text>
         </View>

         <View className="w-full mt-16">
            <Text className="font-semibold text-lg mb-4">Ingresa tus datos para registrarte.</Text>

            <View className="mb-4 w-full">
               <TextInput
                  className="border border-gray-300 rounded-full px-4 py-3 text-base"
                  placeholder="Nombre"
                  value={name}
                  onChangeText={setName}
               />
            </View>

            <View className="mb-4 w-full">
               <TextInput
                  className="border border-gray-300 rounded-full px-4 py-3 text-base"
                  placeholder="Apellido"
                  value={lastName}
                  onChangeText={setLastName}
               />
            </View>

            <View className="mb-4 w-full">
               <TextInput
                  className="border border-gray-300 rounded-full px-4 py-3 text-base"
                  placeholder="Correo electrónico"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
               />
            </View>

            <View className="mb-4 w-full">
               <TextInput
                  className="border border-gray-300 rounded-full px-4 py-3 text-base"
                  placeholder="Contraseña"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
               />
            </View>

            <View className="mb-4 w-full">
               <TextInput
                  className="border border-gray-300 rounded-full px-4 py-3 text-base"
                  placeholder="Confirma tu contraseña"
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
               />
            </View>
         </View>

         <TouchableOpacity
            onPress={handleRegister}
            className="bg-blue py-3 rounded-full mt-8 w-full"
         >
            <Text className="text-white text-center text-lg">Registrarme</Text>
         </TouchableOpacity>

         <TouchableOpacity
            onPress={() => router.push('/login')}
            className="mt-8"
         >
            <Text className="text-center text-lg font-semibold">¿Ya tienes una cuenta? Ingresar</Text>
         </TouchableOpacity>
      </View>
   );
}
