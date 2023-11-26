import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Pressable, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useGlobalSearchParams } from 'expo-router';
import useFetch from '../../Hook/useFetch';
import { MonoText } from '../../components/StyledText';

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
        <View style={styles.container}>
            <Text>ImageGrid Component test</Text>
            <View style={styles.imageContainer}>
                <FlatList
                    data={data?.images}
                    renderItem={({ item }) => (
                        <View style={styles.imageWrapper}>
                            <Pressable onPress={() => router.push(`/image-grid/${item}`)}>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '80%', // You can adjust the width as needed
    },
    imageWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
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
