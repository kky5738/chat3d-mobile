import React, {useState, useCallback} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import useFetch from "../../Hook/useFetch";

const Render3D = () => {
    const params = useGlobalSearchParams()
    // const router = useRouter()
    const [refreshing, setRefreshing] = useState(false)
    console.log(params.image)
    const {data, isLoading, error, refetch} = useFetch("create-3D", "POST", {
        query: params.image,
        ID: params.image_to_3d,
        modelName: "NeRF"
    })

    return (
        <View>
            <Text>Test 3D</Text>
            {isLoading ? 
                (
                    <ActivityIndicator size="large" color="#0000ff" /> 
                ) : (
                    <Text>No images found.</Text>
                )}
        </View>
    )
}

export default Render3D