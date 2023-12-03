import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

/**
 * InputPrompt component for handling user input and sending requests.
 * @param {Object} props - Component props.
 * @param {string} props.inputText - The input text controlled by the state.
 * @param {function} props.setInputText - A function to update the input text state.
 * @param {function} props.handlePress - The event handler function for pressing the send button.
 */
const InputPrompt = ({ inputText, setInputText, handlePress }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.promptWarpper}>
                {/* TextInput for user input */}
                <TextInput
                    style={styles.textInput}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    placeholder="Type Here!"
                    onSubmitEditing={handlePress}
                />
                {/* Pressable for sending the input */}
                <Pressable style={styles.sendBtn} onPress={handlePress}>
                    <Text style={styles.sendText}>send</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    promptWarpper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'middle',
    },
    sendBtn: {
        borderRadius: 5,
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
        verticalAlign: 'middle',
    },
    textInput: {
        flexShrink: 0,
        borderColor: '#4c4c4c',
        borderBottomWidth: 1,
        backgroundColor: '#E6E6E6',
        paddingLeft: 10,
    },
});

export default InputPrompt;
