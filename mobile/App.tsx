import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/blur.png'

import Stripes from './src/assets/stripes.svg'
import Logo from './src/assets/logo.svg'
import React from 'react'

const StyledStripes = styled(Stripes)
const StyledLogo = styled(Logo)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      imageStyle={{ position: 'absolute' }}
      className="h-screen flex-1 items-center justify-center bg-gray-900 px-7 py-10"
    >
      <StatusBar style="light" translucent />
      <StyledStripes className="absolute left-2" />
      <View className="flex-1 items-center justify-center gap-6">
        <StyledLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>

          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos da sua jornada e compartilhe (se quiser) com o
            mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </ImageBackground>
  )
}
