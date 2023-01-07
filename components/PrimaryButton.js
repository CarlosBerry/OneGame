import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children}) {
    function PressHandler(){
        console.log('pressed!!');
    }
    return(
        <View style={styles.outterContainer}>
            <Pressable 
            style={styles.innerContainer}
            onPress={PressHandler} 
            android_ripple={{color: '#640233'}}>
                 <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
            
        </View>
    );

}
export default PrimaryButton;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: '#4e0329',
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
    
