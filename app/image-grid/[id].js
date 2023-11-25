import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Pressable, Image, ActivityIndicator } from "react-native";
import { useGlobalSearchParams } from 'expo-router';
import useFetch from '../../Hook/useFetch';

const ImageGrid = () => {
    const params = useGlobalSearchParams();
    const { data, isLoading, error, refetch } = useFetch("image-create", "POST", {
        query: params.id,
        modelName: "stable diffusion"
    });
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    return (
        <View>
            <Text>ImageGrid Component test</Text>
            <View>
                <FlatList
                    data={data?.images}
                    renderItem={({ item }) => (
                        <View>
                            <Pressable onPress={() => router.push(`/image-grid/${item}`)}>
                                <Image
                                    source={{ uri: `data:image/png;base64,${item}` }}
                                    style={{ width: 100, height: 100 }}
                                    resizeMode="contain"
                                />
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    ListEmptyComponent={() => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            {isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff" />
                            ) : (
                                <Text>No images found.</Text>
                            )}
                        </View>
                    )}
                    ListFooterComponent={() => (
                        isLoading && (
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        )
                    )}
                />
            </View>
        </View>
    );
};

export default ImageGrid;
