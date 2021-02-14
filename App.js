import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as React from 'react';
import MyTabs from "./App/routes/bottomNav";


export default function App() {
  return (
    <MyTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
