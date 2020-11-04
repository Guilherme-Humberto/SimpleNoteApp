import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import { globalStyles } from './src/styles/global'

import { Routes } from './src/routes/routes'

const getFonts = () => {
  return Font.loadAsync({
    "Roboto": require('./assets/fonts/Roboto-Bold.ttf'),
    "Sansita": require('./assets/fonts/SansitaSwashed-Medium.ttf'),
    "Alata": require('./assets/fonts/Alata-Regular.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded) {
    return (
      <View style={globalStyles.container}>
        <StatusBar style="inverted" />
        <Routes />
      </View>
    )
  }
  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
    
    