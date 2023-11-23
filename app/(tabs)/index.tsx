import {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import InputPrompt from '../../components/InputPrompt'
import axios from 'axios'

export default function TabOneScreen() {
  const [inputText, setInputText] = useState('')
  const [prompt, setPrompt] = useState(Object)

  // When server is working on
  // const handlePress = async () => {

  //   console.log("send pressed", inputText)
  //   const options = {
  //     method: "POST",
  //     url: `http://100.64.159.131:8375/text`,
  //     data: {
  //       query: inputText,
  //       model_id: "T5"
  //     }
  //   }

  //   try{
  //     const response = await axios.request(options)
  //     console.log(response.data.answer)
  //     setPrompt(response.data.answer)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // When server is not working
  const handlePress = () => {
    const answerArray = [
      'A minimalist table: This design features a clean and uncluttered look, making it perfect for small spaces or as an accent piece in larger rooms. It is made of high-quality materials that will not take up too much space while still providing ample surface area to spread out your dinnerware',
      'A minimalist table with a clean and simple design: This type of furniture is often made from natural materials such as wood or metal, giving it an industrial look. The tables are usually designed to be functional but not necessarily decorative in nature; they typically have minimal details that add visual interest without taking up too much space on the floor',
      'A minimalist table: This design is characterized by its clean lines and simple shapes, making it perfect for small spaces or as an accent piece in larger rooms. The tables are made of high-quality materials that have been carefully chosen to blend seamlessly with the surrounding decor while still maintaining their own unique aesthetics'
    ]

    setPrompt(answerArray)
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
