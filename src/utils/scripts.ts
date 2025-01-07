export async function registerUser(
   name: string,
   lastname: string,
   email: string,
   password: string
): Promise<{ success: boolean; message: string }> {
   try {
      const response = await fetch('http://care4u.us-east-1.elasticbeanstalk.com/create_user', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            name: name,
            last_name: lastname,
            email: email,
            password: password,
         }),
      });

      if (!response.ok) {
         const errorData = await response.json();
         return { success: false, message: errorData.message || 'Error en el registro' };
      }

      const data = await response.json();
      return { success: true, message: data.message || 'Registro exitoso' };
   } catch (error) {
      return { success: false, message: 'Error de red. Intenta nuevamente.' };
   }
}

export async function loginUser(email: string, password: string): Promise<{ success: boolean; message: string }> {
   try {
      const response = await fetch('http://care4u.us-east-1.elasticbeanstalk.com/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.message || 'Credenciales inválidas. Intenta nuevamente.');
      }

      const data = await response.json();
      return { success: true, message: data.message || 'Login exitoso' };
   } catch (error: any) {
      return { success: false, message: error.message || 'Error de red. Intenta nuevamente.' };
   }
}


export async function resetPasswordGetCode(email: string): Promise<{ success: boolean; message: string }> {
   try {
      const response = await fetch('http://care4u.us-east-1.elasticbeanstalk.com/reset_password_get_code', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email }),
      });

      if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.message || 'No se pudo enviar el código de recuperación. Intenta nuevamente.');
      }

      const data = await response.json();
      return { success: true, message: data.message || 'Código de recuperación enviado exitosamente.' };
   } catch (error: any) {
      return { success: false, message: error.message || 'Error de red. Intenta nuevamente.' };
   }
}

export async function validatePasswordCode(email: string, code: number): Promise<{ success: boolean; message: string }> {
   try {
      const response = await fetch('http://care4u.us-east-1.elasticbeanstalk.com/validate_password_code', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.message || 'Código inválido. Intenta nuevamente.');
      }

      const data = await response.json();
      return { success: true, message: data.message || 'Código verificado exitosamente.' };
   } catch (error: any) {
      return { success: false, message: error.message || 'Error de red. Intenta nuevamente.' };
   }
}


export async function updatePassword(
   email: string,
   code: number,
   password: string
): Promise<{ success: boolean; message: string }> {
   console.log(`Enviando solicitud para actualizar la contraseña: email=${email}, code=${code}, password=${password}`);

   try {
      const response = await fetch('http://care4u.us-east-1.elasticbeanstalk.com/update_password', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, code, password }),
      });

      if (!response.ok) {
         const errorData = await response.json();
         console.error('Error en la respuesta de la API:', errorData);
         throw new Error(errorData.message || 'Error al actualizar la contraseña. Intenta nuevamente.');
      }

      const data = await response.json();
      console.log('Respuesta exitosa de la API:', data);

      return {
         success: true,
         message: data.message || 'Contraseña actualizada correctamente.',
      };
   } catch (error: any) {
      console.error('Error en la solicitud de actualización de contraseña:', error);
      return {
         success: false,
         message: error.message || 'Error de red. Intenta nuevamente.',
      };
   }
}



