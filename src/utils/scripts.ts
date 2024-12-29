export async function registerUser(
   name: string,
   lastname: string,
   email: string,
   password: string
): Promise<{ success: boolean; message: string }> {
   try {
      const response = await fetch('http://care4u.us-east-2.elasticbeanstalk.com/create_user', {
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
      const response = await fetch('http://care4u.us-east-2.elasticbeanstalk.com/login', {
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
      const response = await fetch('http://care4u.us-east-2.elasticbeanstalk.com/reset_password_get_code', {
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
