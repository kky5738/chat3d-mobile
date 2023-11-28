import React, {useState, useCallback} from "react";
import { View, Text } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import useFetch from "../../Hook/useFetch";

const Render3D = () => {
    const params = useGlobalSearchParams()
    const router = useRouter()
    const [refreshing, setRefreshing] = useState(false)
    console.log(params.image)
    const {data, isLoading, error, refetch} = useFetch("create-3D", "POST", {
        query: params.image,
        modelName: "NeRF"
    })
    console.log("3d data:", data)
    return (
        <View>
            <Text>Test 3D</Text>
            
        </View>
    )
}

export default Render3D