import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      {/* Define the screen options */}
      <Stack.Screen options={{ title: 'Oops!' }} />
      {/* Main content of the screen */}
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        {/* Link to navigate back to the home screen */}
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to the home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
