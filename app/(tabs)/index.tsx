import {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import InputPrompt from '../../components/InputPrompt'
import axios from 'axios'

export default function TabOneScreen() {
  const [inputText, setInputText] = useState('')
  const [prompt, setPrompt] = useState('')

  const handlePress = async () => {

    console.log("send pressed", inputText)
    const options = {
      method: "POST",
      url: `http://100.64.159.131:8375/text`,
      data: {
        query: inputText,
        modelName: "T5"
      }
    }

    try{
      const response = await axios.request(options)
      console.log(response.data.answer)
      setPrompt(response.data.answer)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Tab One</Text>
        <InputPrompt inputText={inputText} setInputText={setInputText} handlePress={handlePress}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo data={prompt} />
      </ScrollView>
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
