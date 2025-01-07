import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { validatePasswordCode } from '../utils/scripts';
import { useRouter, useLocalSearchParams } from 'expo-router';

const envelope = require('../../assets/envelope.png');

export default function CodePassword() {
   const [otp, setOtp] = useState('');
   const [loading, setLoading] = useState(false);
   const [timeLeft, setTimeLeft] = useState(5 * 60);

   const router = useRouter();
   const { email } = useLocalSearchParams(); // Obtener el email desde los parámetros

   const handleVerifyCode = async () => {
      console.log('handleVerifyCode ejecutado');
      console.log('Email recibido:', email);
      console.log('Código ingresado:', otp);

      if (!email || typeof email !== 'string') {
         console.log('Error: El email es inválido o no fue proporcionado.');
         return;
      }

      if (otp.length !== 6 || isNaN(Number(otp))) {
         console.log('Error: El código debe tener 6 dígitos numéricos.');
         return;
      }

      try {
         setLoading(true);
         console.log('Enviando solicitud a la API...');
         const result = await validatePasswordCode(email, parseInt(otp, 10));
         setLoading(false);

         console.log('Resultado de la API:', result);

         if (result.success) {
            console.log('Éxito:', result.message);
            // Pasando parámetros como parte de la URL
            router.push(`/updatePassword?email=${email}&code=${otp}`);
         } else {
            console.log('Error en la validación:', result.message);
         }
      } catch (error) {
         setLoading(false);
         console.log('Error en la solicitud:', error);
      }
   };


   useEffect(() => {
      if (timeLeft > 0) {
         const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
         }, 1000);

         return () => clearInterval(timer);
      }
   }, [timeLeft]);

   const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
   };

   return (
      <View className="py-8 px-8">
         <Text className="text-blue font-bold text-center text-2xl mb-2 mt-8">
            Código de verificación
         </Text>

         <Text className="text-center mb-8">
            Ingresa el código de 6 dígitos que hemos enviado a tu correo electrónico.
         </Text>

         <View className="flex justify-center items-center gap-4 mb-6">
            <Image source={envelope} className="w-6 h-6" />
            <Text className="font-bold">{email || 'Email no proporcionado'}</Text>
         </View>

         <Text
            className={`text-center font-bold mb-6 ${timeLeft > 0 ? 'text-blue' : 'text-red'}`}
         >
            {formatTime(timeLeft)}
         </Text>

         <TextInput
            placeholder="000000"
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
            keyboardType="numeric"
            className="border border-gray-300 rounded-full text-center p-3 mb-6 focus:ring focus:ring-blue focus:outline-none"
         />

         <TouchableOpacity
            onPress={handleVerifyCode}
            disabled={loading || timeLeft === 0}
            className={`py-3 rounded-full ${loading || timeLeft === 0 ? 'bg-blue/70' : 'bg-blue'}`}
         >
            <Text className="text-white text-center font-semibold">
               {loading ? 'Verificando...' : timeLeft === 0 ? 'Tiempo expirado' : 'Verificar Código'}
            </Text>
         </TouchableOpacity>
      </View>
   );
}
