import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function Square({value}){
  const getButStyle = ({ pressed}) => pressed ? [styles.pressed, styles.button] : [styles.button];

  return (
    <Pressable
      style={getButStyle}
      onPress={() => {
        console.log(`I been pressed.`);
      }}>
      <Text style={styles.buttonText}>{value}</Text>
    </Pressable>);
}

export default function App() {
  const getButStyle = ({ pressed}) => pressed ? [styles.pressed, styles.button] : [styles.button];

  return (
    <View style={styles.container}>
      <View style={styles.gameboard}>
        <View style={styles.gameboardRow}>
          <Square value = "O" />
          <Square value = "   " />
          <Square value = "O" />
        </View>
        <View style={styles.gameboardRow}>
          <Square value = "X" />
          <Square value = "X" />
          <Square value = "O" />
        </View>
        <View style={styles.gameboardRow}>
          <Square value = "X" />
          <Square value = "   " />
          <Square value = "O" />
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 60,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderColor: '#fff'
  },
  gameboard:{
    backgroundColor: '#FFFF00',
    padding: 10,
  },
  gameboardRow: {
    flexDirection: 'row',
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#99f",
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
