import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Pressable, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useGlobalSearchParams, useRouter } from 'expo-router';
import useFetch from '../../hooks/useFetch';

const ImageGrid = () => {
    // Get search params from global context
    const params = useGlobalSearchParams();
    // Get router for navigation
    const router = useRouter();

    // Fetch data from the server using useFetch hook
    const { data, isLoading, error, refetch } = useFetch("image-create", "POST", {
        query: params.img_query,
        modelName: "stable diffusion"
    });
    const [refreshing, setRefreshing] = useState(false);

    // Callback function to handle refresh
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Call the refetch function to get fresh data from the server
        refetch();
        setRefreshing(false);
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>ImageGrid Component test</Text>
            <View style={styles.imageContainer}>
                <FlatList
                    data={data?.images}
                    renderItem={({ item, index }) => (
                        <View style={styles.imageWrapper}>
                            <Pressable onPress={() => 
                                router.push({
                                    pathname: `/3d-recon/image${index}`,
                                    params: {
                                        image: `${item}`,
                                        id: `${index}`
                                    }
                                })
                            }>
                                <Image
                                    source={{ uri: `data:image/png;base64,${item}` }}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    numColumns={2}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListContainer}>
                            {isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff" />
                            ) : (
                                <Text>No images found.</Text>
                            )}
                        </View>
                    )}
                    ListFooterComponent={() => (
                        isLoading && (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        )
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        width: '80%', // You can adjust the width as needed
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    emptyListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
});

export default ImageGrid;
