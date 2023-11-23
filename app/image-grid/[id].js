import React from "react";
import { View, Text } from "react-native";
import { useGlobalSearchParams} from 'expo-router'
import useFetch from '../../Hook/useFetch'


const ImageGrid = () => {
    const params = useGlobalSearchParams()
    
    return (
        <View>
            <Text>ImageGrid Component test</Text>
        </View>
    )
}

export default ImageGrid