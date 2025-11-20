import {
  Image,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { BlurView } from 'react-native-blur-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.box}>
          <BlurView style={styles.box} blurIntensity={0}>
            <Image
              source={require('./assets/happyDog.jpg')}
              style={styles.img}
            />
          </BlurView>
        </View>

        <View style={styles.box}>
          <BlurView style={styles.box} blurIntensity={50}>
            <Image
              source={require('./assets/happyDog.jpg')}
              style={styles.img}
            />
          </BlurView>
        </View>

        <View style={styles.box}>
          <BlurView style={styles.box} blurIntensity={100}>
            <Image
              source={require('./assets/happyDog.jpg')}
              style={styles.img}
            />
          </BlurView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    gap: 15,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default App;
