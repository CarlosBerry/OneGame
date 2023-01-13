import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from '../../constants/colors';



function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;

const styles= StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.accentYellow,
        fontFamily: 'open-sans-bold',
        padding: deviceWidth < 360 ? 18 : 24,
        margin: deviceWidth < 360 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    numberText:{
        color: Colors.accentYellow,
        fontSize: deviceWidth < 360 ? 24 : 32,
        
    }

});
