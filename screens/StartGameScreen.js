import { TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber= parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert(
            'Invalid Number',
            'Number has to be between 1 and 99',
            [{text: 'OK!', style: 'destructive', onPress:resetInputHandler}]
            
            );
            return;
        }
        onPickNumber(chosenNumber);
    }



    return (
        <View  style ={styles.inputContainer}>
            <TextInput 
            style ={styles.numberInput} 
            maxLength={2}
            keyboardType="number-pad"
            value = {enteredNumber}
            onChangeText= {numberInputHandler}
            />
            

            <View style={styles.buttonsContainer}>
               <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View> 
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                
            </View>
            

        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8
    }, 
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accentYellow,
        borderBottomWidth: 2,
        color: Colors.accentYellow,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})