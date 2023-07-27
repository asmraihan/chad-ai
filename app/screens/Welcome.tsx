import { View, Text, Image, TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <TouchableOpacity onPress={() => navigation.navigate("Home")} className='bg-black mx-5 p-3.5 rounded-xl' >
        <Text className='text-gray-200 font-semibold text-lg text-center'>Get Started</Text>
      </TouchableOpacity>

      <View>
        {/* <Text className='text-gray-700 font-semibold text-center'>Made with <Icon name="heart" size={20} color="#000" /> by <Text className='text-blue-500'>Raihan</Text></Text> */}
        <View className='flex-row justify-center items-center gap-x-8'> 
          <Icon onPress={() => Linking.openURL('https://www.linkedin.com/in/asmraihan/')}  name="linkedin-square" size={40} color="#0077B7" />
          <Icon onPress={() => Linking.openURL('https://github.com/asmraihan')} name="github-square" size={40} color="#000" />
          <Icon onPress={() => Linking.openURL('https://www.facebook.com/asmraihanbh/')} name="facebook-square" size={40} color="#1778F2" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome