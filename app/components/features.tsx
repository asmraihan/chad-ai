import { View, Text, Image } from 'react-native'
import React from 'react'

const Features = () => {
  return (
    <View className='space-y-4 mt-8'>
      <Text className='font-semibold text-gray-700 text-4xl'>Features of Chad AI 1.0</Text>
      <View className='bg-neutral-200 p-4 rounded-xl space-y-2'>
        <View className='flex-row items-center space-x-2'>
          <Image source={require('../../assets/images/dalleIcon.png')} className='w-4 h-4 bg-white p-4 opacity-80 rounded-md' />
          <Text className='text-lg font-semibold text-gray-700'>ChatGPT 3.5 Turbo</Text>
        </View>
        <Text className='font-semibold text-gray-600'>ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.</Text>
      </View>
      
      <View className='bg-neutral-200 p-4 rounded-xl space-y-2'>
        <View className='flex-row items-center space-x-2'>
          <Image source={require('../../assets/images/dalleIcon.png')} className='w-4 h-4 bg-white p-4 opacity-80 rounded-md' />
          <Text className='text-lg font-semibold text-gray-700'>DALL-E 2</Text>
        </View>
        <Text className='font-semibold text-gray-600'>DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.</Text>
      </View>

    </View>
  )
}

export default Features