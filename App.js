import { useState } from 'react';
import { ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';  
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen/>
  }
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
         {screen}
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
