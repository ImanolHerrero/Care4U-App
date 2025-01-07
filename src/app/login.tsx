import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { validateLoginInputs } from '../utils/auth';
import { loginUser } from '../utils/scripts';

type Errors = {
   email?: string;
   password?: string;
};

const LoginScreen = () => {
   const router = useRouter();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState<Errors>({});
   const [isEmailFocused, setIsEmailFocused] = useState(false);
   const [isPasswordFocused, setIsPasswordFocused] = useState(false);

   const handleLogin = async () => {
      const validationErrors = validateLoginInputs(email, password);

      if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
         return;
      }

      setErrors({});

      const result = await loginUser(email, password);

      if (result.success) {
         router.push('/home');
      } else {
         console.log('Error', result.message);
      }
   };

   return (
      <ScrollView>
         <View className="flex flex-col justify-center items-center px-8 py-8">

            <View>
               <Text className="text-4xl text-blue font-semibold text-center mb-4">
                  Te damos la bienvenida
               </Text>
               <Text className="text-center text-xl">
                  Dedica tiempo a cuidar tu salud. Tu bienestar es nuestra prioridad.
               </Text>
            </View>

            <View className="mb-8 w-full mt-16">
               <Text className="font-semibold text-lg">Ingresa tus datos para iniciar sesión.</Text>
            </View>

            <View className="mb-4 w-full">
               <TextInput
                  style={[
                     styles.input,
                     isEmailFocused && styles.inputFocused,
                     errors.email && styles.inputError,
                  ]}
                  className="rounded-full px-4 py-3 text-base"
                  placeholder="Correo electrónico"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  onChangeText={(text) => {
                     setEmail(text);
                     if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
               />
               {errors.email && <Text className="text-deepRed mt-2">{errors.email}</Text>}
            </View>

            <View className="mb-6 w-full">
               <TextInput
                  style={[
                     styles.input,
                     isPasswordFocused && styles.inputFocused,
                     errors.password && styles.inputError,
                  ]}
                  className="rounded-full px-4 py-3 text-base"
                  placeholder="Contraseña"
                  secureTextEntry
                  value={password}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  onChangeText={(text) => {
                     setPassword(text);
                     if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
               />
               {errors.password && <Text className="text-deepRed mt-2">{errors.password}</Text>}
            </View>

            <TouchableOpacity onPress={() => router.push('/recoverPassword')} className="mt-2">
               <Text className="text-blue text-center text-base">Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} className="bg-blue py-3 rounded-full mt-16 w-full">
               <Text className="text-white text-center text-lg">Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/register')} className="mt-8">
               <Text className="text-center text-lg font-semibold">
                  ¿Aún no estás registrado? Registrarme
               </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: '#d1d5db', // border-gray-300
   },
   inputFocused: {
      borderColor: '#0F679B', // border-blue-500 
      borderWidth: 2,
   },
   inputError: {
      borderColor: '#E33142', // border-deepRed
   },
});

export default LoginScreen;
