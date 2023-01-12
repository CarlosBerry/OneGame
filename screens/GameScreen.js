import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import NumberContainer from "../components/Game/NumbersContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/GuessLogItem";

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);


    useEffect(() =>{
    if(currentGuess===userNumber){
       onGameOver(guessRounds.length);
    }},
    [currentGuess,userNumber,onGameOver]);

    useEffect(() =>{
        minBoundary= 1,
        maxBoundary= 100
       },
        []);

    

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
        const newRndNumber = genRndBetween(
            minBoundary, 
            maxBoundary, 
            currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds =>[newRndNumber,...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

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
    <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
            <GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
            />
            )}
            keyExtractor={(item)=> item}
        />
    </View>
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
    },
    listContainer: {
        flex: 1,
        padding: 16,
      }
    
});
    
