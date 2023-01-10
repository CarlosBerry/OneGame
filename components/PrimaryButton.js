import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from '../constants/colors';

function PrimaryButton({children, onPress}) {
 
    return(
        <View style={styles.outterContainer}>
            <Pressable 
            style={styles.innerContainer}
            onPress={onPress} 
            android_ripple={{color: Colors.primary600}}>
                 <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
            
        </View>
    );

}
export default PrimaryButton;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: Colors.primary400,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    outterContainer:{
        borderRadius: 32,
        margin: 4,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }

});
    
