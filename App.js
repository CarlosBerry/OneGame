import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';  
import GameOverScreen from './screens/GameOverScreen'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] =useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf')
  });
  if (!fontsLoaded){
    return <AppLoading/>;
  }
  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
      setGameIsOver(false);
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen onGameOver={gameOverHandler} userNumber={userNumber} roundNumber= {guessRounds} onStartNewGame={startNewGameHandler}/>
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
