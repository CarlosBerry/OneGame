import { StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';  
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return  (
    <LinearGradient colors={['#Fe0329','#ddb52f']}
    style={styles.screenRoots}>
      <StartGameScreen/>
    </LinearGradient>
  
  );
}

const styles = StyleSheet.create({
 screenRoots: {
  backgroundColor: '#ddb52f',
  flex:1
 }
});
