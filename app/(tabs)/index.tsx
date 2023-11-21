import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import InputPrompt from '../../components/InputPrompt'

export default function TabOneScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/*  */}
      {/* <View style={styles.promptWarpper}>
        <TextInput
          style={styles.inputPrompt}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder='Test'
        />
        <TouchableOpacity style={styles.sendText}>
          <Text>send</Text>
        </TouchableOpacity>
      </View> */}
      {/*  */}
      <InputPrompt/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputPrompt: {
    width: "60%",
    height: "10%",
    paddingHorizontal: 16
  },
  promptWarpper: {
    flex: 1,
    width: "100%",
    height: "50%",
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  sendText: {
    flex: 1
  }
});
