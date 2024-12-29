import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Importar desde Expo
import icon from "../../assets/splash.png";

export default function SplashScreen() {
   const fadeAnimation = useRef(new Animated.Value(0)).current;

   useEffect(() => {
      Animated.timing(fadeAnimation, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
      }).start();
   }, [fadeAnimation]);

   return (
      <LinearGradient
         colors={["#0B3954", "#087E8B"]}
         start={{ x: 0, y: 0 }}
         end={{ x: 0, y: 1 }}
         style={styles.container}
      >
         <Animated.View
            style={[styles.imageContainer, { opacity: fadeAnimation }]}
         >
            <Image style={styles.image} source={icon} />
         </Animated.View>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
   },
});
