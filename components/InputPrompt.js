import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"
// import { TextInput, MD3LightTheme as DefaultTheme } from 'react-native-paper'


const InputPrompt = ({inputText, setInputText, handlePress}) => {

    return (
        <View>
            <View style={styles.promptWarpper}>
                <TextInput
                    style={styles.textInput}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    placeholder='Type Here!'
                    
                />
                <Pressable 
                    style={styles.sendBtn}
                    onPress={handlePress}
                >
                    <Text style={styles.sendText}>send</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    promptWarpper: {
        flex: 1,
        
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'center',
      },
      sendBtn: {
        borderRadius: '5px',
        border: '1px solid #C2C2C2',
        paddingVertical: '9.5px',
        paddingHorizontal: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#426B1F',
        width: '15%',
        height: 'auto'
      },
      sendText: {
        color: '#FFF',
        verticalAlign: 'center',
      },
      textInput: {
        flexShrink: 0,
        borderColor: '#4c4c4c',
        borderBottomWidth: '1px',
        
        // borderRadius: '5px',
        backgroundColor: '#E6E6E6',
        paddingLeft: '10px',
        
      }
})

export default InputPrompt