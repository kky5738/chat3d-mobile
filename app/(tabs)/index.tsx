import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TextInput
        style={styles.inputPrompt}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder='Test'
      />
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
});
