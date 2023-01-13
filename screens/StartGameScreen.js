import { TextInput,
     View,
     StyleSheet, 
     Alert, 
     useWindowDimensions,
     KeyboardAvoidingView,
     ScrollView    
    } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

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


    const marginTopDistance = height < 450 ? 30 : 100;
    return (
    <ScrollView style={styles.screenKAV}>
      <KeyboardAvoidingView style={styles.screenKAV} behavior={"position"}>
        <View style={[styles.rootContainer, {marginTop : marginTopDistance}]}>
            <Title>Guess my Number</Title>
        <Card>
            <InstructionText>Enter a Number:</InstructionText>
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
            

        </Card>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    screenKAV: {
        flex: 1,
    },
    rootContainer:{
        flex: 1,
        // marginTop: deviceHeight < 400 ? 30 : 100,
        fontSize: 32,
        fontWeight: 'bold',     
        alignItems: 'center'
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