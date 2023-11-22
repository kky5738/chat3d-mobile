import { useEffect, useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"


const InputPrompt = ({inputText, setInputText, handlePress}) => {

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
        
        flexDirection: 'row',
        backgroundColor: 'yellow',
      },
      sendText: {
        padding: 10
      }
})

export default InputPrompt