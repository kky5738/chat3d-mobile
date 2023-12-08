import React, { useState, useCallback } from "react";
import { ActivityIndicator } from "react-native";
import {View, Text} from "../../components/Themed"
import { useGlobalSearchParams, useRouter } from "expo-router";
import useFetch from "../../hooks/useFetch";

const Generate3D = () => {
    const params = useGlobalSearchParams();
    const [refreshing, setRefreshing] = useState(false);
    console.log(params.image);

    // Fetch 3D data
    const { data, isLoading, error, refetch } = useFetch("create-3D", "POST", {
        query: params.image,
        ID: params.image_to_3d,
        modelName: "NeRF",
    });

    return (
        <View>
            <Text>Test 3D</Text>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Text>No images found.</Text>
            )}
        </View>
    );
};

export default Generate3D;
