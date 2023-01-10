import { useState } from "react";
import { Text,View, StyleSheet } from "react-native";
import Title from "../components/Title";


function GameScreen(){
  return  (
  <View style={styles.screen}>
    <View>
        <Title>Opponent's guess!</Title>
        
    </View>
    <View>
        <Text>Higher or lower?</Text>
    </View>
    
  </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      padding: 24

    }
    
});
    
