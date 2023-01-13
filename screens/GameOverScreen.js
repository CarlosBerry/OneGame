import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";


function GameOverScreen({ roundNumber, userNumber, onStartNewGame}){
    return (
        <View style= {styles.rootContainer}>
            <Title>Game Over screen!</Title>
            <View style= {styles.imageContainer}>
                <Image style={styles.imageStyle} source={require("../assets/success.png")}/>
            </View>
            <Text style={styles.summaryText}> Your phone needed 
                 <Text style={styles.hightLight}> {roundNumber}</Text> rounds to guess the number 
                 <Text style={styles.hightLight}> {userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
          
    )
}
export default GameOverScreen;
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent:'center',
        alignItems:'center'      
    },
    imageContainer:{
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36
        
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    hightLight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary400
    }

});