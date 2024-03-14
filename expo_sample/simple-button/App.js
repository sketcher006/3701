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
      <View style={styles.item1} />
      <View style={styles.item2} />
      <View style={styles.item3} />
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: 'lightgray',
  },
  item1: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
  item2: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  item3: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
