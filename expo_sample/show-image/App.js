import { Text, StyleSheet, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

const imageURL = 'https://reactnative.dev/docs/assets/p_cat2.png';
const imageURL2 = 'https://i.natgeofe.com/n/5d00b0cc-ab95-4522-ad13-7c65b7589e6b/NationalGeographic_748483_3x2.jpg?w=718&h=479';

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [imgUrl, setImageUrl] = useState(imageURL);

  const clearInput = () => {
    setTextInput('');
  };

  const handleSubmit = () => {
    setImageUrl(textInput);
  };

  return (
    <View style={styles.container}>
      <Text>Input Image URL</Text>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={setTextInput}
        placeholder='Please type URL'
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Clear" onPress={clearInput} />
      </View>
      {imgUrl ? <Image source={{ uri: imgUrl }} style={styles.image} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});
