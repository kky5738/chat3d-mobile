import React, { useState, useCallback } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import {View, Text} from "../../components/Themed"
import { useGlobalSearchParams, } from "expo-router";
import useFetch from "../../hooks/useFetch";

const Generate3D = () => {
    const params = useGlobalSearchParams();
    const [refreshing, setRefreshing] = useState(false);

    // backend 서버에서 3D data 받아오기
    const { data, isLoading, error, refetch } = useFetch("create-3D", "POST", {
        query: params.image,
        ID: params.image_to_3d,
        modelName: "NeRF",
    });

    // Callback function to handle refresh
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Call the refetch function to get fresh data from the server
        refetch();
        setRefreshing(false);
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                // 3D 생성 중일 경우 로딩 아이콘 표시
                <View>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>3D is generating...</Text>    
                </View>
            ) : (
                // 3D 생성이 끝나면 표시되는 text
                <Text>3D has generated</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})
export default Generate3D;
