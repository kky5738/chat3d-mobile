import {react, useState, useCallback} from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useGlobalSearchParams} from 'expo-router'
import useFetch from '../../Hook/useFetch'
import { MonoText } from '../../components/StyledText';

// fix branch 만들고 Hook/useFetch 에서 params 대신 data로 수정하여 request body로 만들기
const ImageGrid = () => {
    const params = useGlobalSearchParams()
    const {data, isLoading, error, refetch} = useFetch("image-create", "POST", {
        query: params.id,
        modelName: "stable diffusion"
    })
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])

    return (
        <View>
            <Text>ImageGrid Component test</Text>
            <View>
                <FlatList
                    data={data.image}
                    renderItem={({item}) => (
                        <View>
                            <Pressable onPress={() => router.push(`/image-grid/${item}`)}>
                                {/* iamge component 이용해서 Text 대신 이미지 띄우기 */}
                                <MonoText>{item}</MonoText>
                            </Pressable>
                        </View>
                    )}
                />
                {/* <Text>{data.image}</Text> */}
            </View>
        </View>
    )
}

export default ImageGrid