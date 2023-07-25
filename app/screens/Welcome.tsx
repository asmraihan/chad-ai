import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {

  const navigation = useNavigation()
  return (
   <SafeAreaView className='flex-1 flex justify-around bg-white'>
   <View className='space-y-2 flex-col items-center justify-center'>
       <Image source={require('../../assets/images/chad_ai.png')} className='w-72 h-14' />
        <Text className='text-center tracking-wider text-gray-700 font-semibold'>AI Assistant powered by OpenAI</Text>
   </View>
   <View className='flex-row justify-center '>
    <Image source={require('../../assets/images/brainckt.png')} className='w-60 h-60' />
     </View>
     <TouchableOpacity onPress={()=> navigation.navigate("Home")} className='bg-black mx-5 p-3.5 rounded-xl' >
      <Text className='text-gray-200 font-semibold text-lg text-center'>Get Started</Text>
     </TouchableOpacity>
   </SafeAreaView>
  )
}

export default Welcome