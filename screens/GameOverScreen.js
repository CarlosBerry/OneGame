import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";


function GameOverScreen(){
    return (
        <View style= {styles.rootContainer}>
            <Title>Game Over screen!</Title>
            <View style= {styles.imageContainer}>
                <Image style={styles.imageStyle} source={require("../assets/success.png")}/>
            </View>
            <Text> Your phone needed X rounds to guess the number Y</Text>
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
    }

});