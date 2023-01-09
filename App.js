import { StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return  (
    <View style={styles.screenRoots}>
      <StartGameScreen/>
    </View>
  
  );
}

const styles = StyleSheet.create({
 screenRoots: {
  backgroundColor: '#ddb52f',
  flex:1
 }
});
