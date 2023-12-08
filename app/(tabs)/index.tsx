import React, { useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import InputPrompt from '../../components/InputPrompt';
import axios from 'axios';

/**
 * TabOneScreen component for the first tab.
 */
export default function TabOneScreen() {
    // State for input text
    const [inputText, setInputText] = useState('');
    
    // State for the server response
    const [prompt, setPrompt] = useState(Object);

    const [isLoading, setIsLoading] = useState(false)

    /**
     * Handles the press event, sends the input to the server, and updates the prompt.
     */
    const handlePress = async () => {
        console.log("send pressed", inputText);
        setIsLoading(true)
        
        const options = {
            method: "POST",
            url: `http://100.64.159.131:8375/text`,
            data: {
                query: inputText,
                modelName: "T5"
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.answer);
            setPrompt(response.data.answer);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Chat3D</Text>
                </View>

                {/* InputPrompt component */}
                <InputPrompt inputText={inputText} setInputText={setInputText} handlePress={handlePress} />

                {/* seperator */}
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                {isLoading ? (
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={styles.getStartedText} > Now prompt is creating </Text>
                    </View>
                ) : (
                    <Text
                        style={styles.getStartedText}
                        lightColor="rgba(0,0,0,0.8)"
                        darkColor="rgba(255,255,255,0.8)">
                        Recommended prompt from LLM here:
                    </Text>
                )}
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
        justifyContent: 'center',
        alignContent: 'center',
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
      },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
});
