import { ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';  
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return  (
    <LinearGradient 
    colors={['#Fe0329','#ddb52f']}
    style={styles.screenRoots}>
      <ImageBackground 
        source={require("./assets/dices.jpg")}
        resizeMode="cover"
        style={styles.screenRoots}
        imageStyle={styles.backgroundImage}
      >
         <StartGameScreen/>
      </ImageBackground>
      
    </LinearGradient>
  
  );
}

const styles = StyleSheet.create({
 screenRoots: {
  flex:1
 },
 backgroundImage:{
  opacity: 0.25
 }
});
