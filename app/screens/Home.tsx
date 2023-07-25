import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Features from '../components/features'

const Home = () => {
  const [texts, setTexts] = useState([])
  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        {/* ai icon */}
        <View className='flex-row justify-center mt-14'>
        <Image source={require('../../assets/images/chad_ai.png')} className='w-72 h-14' />
        </View>
        {/* feature || text messages */}
    {
      texts.length > 0 ? (
        <View></View>
      ) : (
        <Features />
      )
    }

      </SafeAreaView>
    </View>
  )
}

export default Home