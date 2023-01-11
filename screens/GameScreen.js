import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/Game/NumbersContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import {Ionicons} from '@expo/vector-icons';

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


function GameScreen({userNumber, onGameOver}){
    const initialGuess= genRndBetween(1,100, userNumber);
    const[currentGuess, setCurrentGuess]=useState(initialGuess);

    useEffect(() =>{
    if(currentGuess===userNumber){
       onGameOver();
    }},
    [currentGuess,userNumber,onGameOver]);
    

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
    <Card>
    <View>
        <InstructionText>Higher or lower?</InstructionText>
    
    <View style = {styles.buttonsContainer}>
        <View style= {styles.buttonContainer}>
             <PrimaryButton onPress={nextGuestHandler.bind(this,'lower')}>
                <Ionicons name="md-remove" size={24} color= 'white'/>
                </PrimaryButton>
        </View>
        <View style= {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuestHandler.bind(this,'greater')}>
            <Ionicons name="md-add" size={24} color= 'white'/>
                </PrimaryButton>
        </View>
        
    </View>
    </View>
    </Card>
    
  </View>
  );
}



export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      padding: 24

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
    
});
    
