import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Features from '../components/features'
import { dummyMessages } from '../constants'
import Voice from '@react-native-community/voice';
const Home = () => {
  const [messages, setMessages] = useState(dummyMessages)
  const [recording, setRecording] = useState(false)
  const [text, setText] = useState('asd')
  const [speaking, setSpeaking] = useState(false)

  const speechStartHandler = (e: any) => {
    console.log('speech start handler')
  }
  const speechEndHandler = (e: any) => {
    setRecording(false)
    console.log('speech end handler')
  }
  const speechResultsHandler = (e: any) => {
    setRecording(false)
    console.log('speech result voice event', e)
  }

  const speechErrorHandler = (e: any) => {
    console.log('speech error handler', e)
  }

  const startRecording = async () => {
    setRecording(true)
    try {
      //@ts-ignore
      await Voice.start('en-GB')
    } catch (error) {
      console.log('setRecording error', error)
    }
  }
  const stopRecording = async () => {

    try {
      await Voice.stop()
      setRecording(false)
      // fetch from chatgpt
    } catch (error) {
      console.log('error', error)
    }
  }

  const clearAll = () => {
    setMessages([])
  }

  const stopSpeaking = () => {
    setSpeaking(false)
  }

  useEffect(() => {
    // voice handler events
    Voice.onSpeechStart = speechStartHandler
    Voice.onSpeechEnd = speechEndHandler
    Voice.onSpeechResults = speechResultsHandler
    Voice.onSpeechError = speechErrorHandler

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        {/* ai icon */}
        <View className='flex-row justify-center mt-14'>
          <Image source={require('../../assets/images/chad_ai.png')} className='w-72 h-14' />
        </View>
        {/* feature || text messages */}
        {
          messages.length > 0 ? (
            <View className='space-y-2 flex-1'>
              <Text className='text-gray-700 font-semibold ml-1 text-lg'>Assistant</Text>
              <View className='h-5/6 bg-neutral-200 rounded-3xl p-4'>
                <ScrollView bounces={false} className='space-y-4' showsVerticalScrollIndicator={false}>
                  {
                    messages.map((message, index) => {
                      if (message.role == 'assistant') {
                        if (message.content.includes('https')) {
                          // ai image
                          return (
                            <View key={index} className='flex-row justify-start'>
                              <View className='p-2 flex rounded-2xl bg-neutral-300 rounded-tl-none'>
                                <Image source={{ uri: message.content }} className='rounded-2xl h-60 w-60' resizeMode='contain'></Image>
                              </View>
                            </View>
                          )
                        }
                        else {
                          //text message
                          return (

                            <View key={index} className='w-3/4 bg-neutral-300 rounded-xl p-3 rounded-tl-none '>
                              <Text>{message.content}</Text>
                            </View>
                          )
                        }
                      } else {
                        // user message
                        return (
                          <View key={index} className='flex-row justify-end'>
                            <View className='w-3/4 bg-white rounded-xl p-3 rounded-tr-none'>
                              <Text>{message.content}</Text>
                            </View>
                          </View>
                        )
                      }

                    })
                  }
                </ScrollView>
              </View>
            </View>
          ) : (
            <Features />
          )
        }
        {/* clear,text,rec */}

        {/* rec */}
        <View className='flex-row justify-center items-center space-x-2 mb-2 mt-auto'>
          {/* clear */}
          {
            messages.length > 0 && (
              <TouchableOpacity onPress={clearAll} className='bg-white border-2 border-gray-400 rounded-3xl rounded-l-none px-3 py-3'>
                <Text className='text-black font-semibold'>Clear</Text>
              </TouchableOpacity>
            )
          }
          {/* textinput */}
          <View className='flex-row  items-center bg-neutral-200 rounded-3xl pl-4 py-3 w-3/4'>
            <Image source={require('../../assets/images/brainckt.png')} className='w-6 h-6' />
            {/* <Text className='text-gray-400 ml-2'>Type a message...</Text> */}
            <TextInput
              // value={text}
              onChange={() => { }}
              placeholder='Type a message...'
              className=' ml-2 w-5/6'
            />
          </View>

          {
            recording ? (
              // recording stop button
              <TouchableOpacity onPress={stopRecording}>
                <Image className='rounded-full h-16 w-16 mr-2' source={require('../../assets/images/voiceLoading.gif')}></Image>
              </TouchableOpacity>
            ) : (
              // recording start button
              <TouchableOpacity onPress={startRecording}>
                <Image className='rounded-full h-16 w-16 mr-2' source={require('../../assets/images/recordingIcon.png')}></Image>
              </TouchableOpacity>
            )
          }

        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home