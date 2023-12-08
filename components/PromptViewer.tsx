import React from 'react';
import {useRouter} from 'expo-router'
import { StyleSheet, FlatList, Pressable } from 'react-native';

import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function PromptViewer({ data }: { data: string }) {
  const router = useRouter()

  return (
    <View>
      <View style={styles.getStartedContainer}>
        {/* LLM에서 응답 받은 prompt를 FlatList를 이용해 화면에 출력 */}
        <FlatList
          data={data}
          renderItem={({item}) => (
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            darkColor="rgba(255,255,255,0.05)"
            lightColor="rgba(0,0,0,0.05)"
          >
            {/* Text를 누를 경우 해당 text를 이용해 이미지 생성 */}
            <Pressable onPress={() => router.push(`/image-grid/${item}`)}>
              <MonoText>{item}</MonoText>
            </Pressable>
          </View>
          )}
        />
        <Text
          style={styles.footerText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Select any text that you want to make 3D
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  footerText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
