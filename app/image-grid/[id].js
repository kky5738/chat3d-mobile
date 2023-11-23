import {react, useState, useCallback} from "react";
import { View, Text } from "react-native";
import { useGlobalSearchParams} from 'expo-router'
import useFetch from '../../Hook/useFetch'

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
                <Text>{data}</Text>
            </View>
        </View>
    )
}

export default ImageGrid