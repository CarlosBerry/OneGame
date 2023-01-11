import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';  
import GameOverScreen from './screens/GameOverScreen'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  
  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
      setGameIsOver(false);
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen onGameOver={gameOverHandler}/>
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
        <SafeAreaView style={styles.screenRoots}>{screen}</SafeAreaView>
         
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
