import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children}) {
    function PressHandler(){
        console.log('pressed!!');
    }
    return(
        <View>
            <Pressable onPress={PressHandler}>
            <Text>{children}</Text>
            </Pressable>
            
        </View>
    );

}
export default PrimaryButton;

const styles = StyleSheet.create({
    
});
    
