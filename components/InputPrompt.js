import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

const InputPrompt = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        
        <View style={styles.promptWarpper}>
            <TextInput
                style={styles.inputPrompt}
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
                placeholder='Test'
            />
            <TouchableOpacity style={styles.sendText}>
                <Text>send</Text>
            </TouchableOpacity>
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
        flex: 1
      }
})

export default InputPrompt