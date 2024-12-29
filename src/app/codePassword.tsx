import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

const envelope = require('../../assets/envelope.png');

export default function CodePassword() {
   const [otp, setOtp] = useState('');
   const [loading, setLoading] = useState(false);
   const [timeLeft, setTimeLeft] = useState(5 * 60);

   const handleVerifyCode = () => {
      if (otp.length !== 6 || isNaN(Number(otp))) {
         Alert.alert('Error', 'El código debe tener 6 dígitos numéricos.');
         return;
      }

      setLoading(true);
      setTimeout(() => {
         setLoading(false);
         Alert.alert('Éxito', 'El código ha sido verificado.');
      }, 1000);
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
            <Text className="font-bold">correoprueba@gmail.com</Text>
         </View>

         <Text
            className={`text-center font-bold mb-6 ${timeLeft > 0 ? 'text-blue' : 'text-red'
               }`}
         >
            {formatTime(timeLeft)}
         </Text>

         <TextInput
            placeholder="000000"
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
            keyboardType="numeric"
            className="border border-gray-300 rounded-full text-center p-3 mb-6"
         />

         <TouchableOpacity
            onPress={handleVerifyCode}
            disabled={loading || timeLeft === 0}
            className={`py-3 rounded-full ${loading || timeLeft === 0 ? 'bg-blue/70' : 'bg-blue'
               }`}
         >
            <Text className="text-white text-center font-semibold">
               {loading ? 'Verificando...' : timeLeft === 0 ? 'Tiempo expirado' : 'Verificar Código'}
            </Text>
         </TouchableOpacity>
      </View>
   );
}
