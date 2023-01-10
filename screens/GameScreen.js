import { useState } from "react";
import { Text,View, StyleSheet } from "react-native";
import NumberContainer from "../components/Game/NumbersContainer";
import Title from "../components/Title";

function genRndBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if(rndNum === exclude){
        return genRndBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

function GameScreen({userNumber}){
    const initialGuess= genRndBetween(1,100, userNumber);
    const[currentGuess, setCurrentGuess]=useState(initialGuess);

  return  (
  <View style={styles.screen}>
    <View>
        <Title>Opponent's guess!</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
    </View>
    <View>
        <Text>Higher or lower?</Text>
    </View>
    
  </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      padding: 24

    }
    
});
    
