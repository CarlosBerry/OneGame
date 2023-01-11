import { useState } from "react";
import { Text,View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/Game/NumbersContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function genRndBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if(rndNum === exclude){
        return genRndBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber}){
    const initialGuess= genRndBetween(minBoundary,maxBoundary, userNumber);
    const[currentGuess, setCurrentGuess]=useState(initialGuess);
    

    function nextGuestHandler(direction){

        if ((direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber))
        {
            Alert.alert('Do not lie!', 'you know that is not possible',[{Text:'sorry', style:'cancel'},
        ]);
        return;
        }
    
        if(direction==='lower'){
           maxBoundary = currentGuess;
        } else{
            minBoundary = currentGuess+1;
        }
        const newReadNumber = genRndBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newReadNumber);
    }

  return  (
  <View style={styles.screen}>
    <View>
        <Title>Opponent's guess!</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
    </View>
    <View>
        <Text>Higher or lower?</Text>
    
    <View>
        <PrimaryButton onPress={nextGuestHandler.bind(this,'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuestHandler.bind(this,'greater')}>++</PrimaryButton>
    </View>
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
    
