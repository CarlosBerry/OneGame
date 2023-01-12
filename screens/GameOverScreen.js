import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";


function GameOverScreen(){
    return (
        <View style= {styles.rootContainer}>
            <Title>Game Over screen!</Title>
            <View style= {styles.imageContainer}>
                <Image style={styles.imageStyle} source={require("../assets/success.png")}/>
            </View>
            <Text style={styles.summaryText}> Your phone needed 
                 <Text style={styles.hightLight}> X</Text> rounds to guess the number 
                 <Text style={styles.hightLight}> Y</Text>.
                </Text>
                <PrimaryButton>Start New Game</PrimaryButton>
            </View>
          
    )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent:'center',
        alignItems:'center'      
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius: 150,
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