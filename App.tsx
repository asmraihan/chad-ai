import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppNavigation from './app/navigation';
import { useEffect } from 'react';
import { apiCall } from './app/api/openAI';

export default function App() {

  return (
   <AppNavigation />
  );
}
