import { useEffect, useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"


const InputPrompt = ({inputText, setInputText, handlePress}) => {
    

    // const getPrompt = () => {
    //     console.log("send pressed")
    //     const {data, isLoading, error} = useFetch("text", "POST", 
    //         {
    //             query: `${inputText}`,
    //             model_id: "T5"
    //         }
    //     )
    //     console.log(data)
    // }
    

    return (
        <View>
            <View style={styles.promptWarpper}>
                <TextInput
                    style={styles.inputPrompt}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    placeholder='Test'
                />
                <Pressable 
                    style={styles.sendText}
                    onPress={handlePress}
                >
                    <Text>send</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    promptWarpper: {
        flex: 1,
        width: "100%",
        height: "50%",
        flexDirection: 'row',
        backgroundColor: 'yellow',
      },
      sendText: {
        padding: 10
      }
})

export default InputPrompt