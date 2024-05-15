import { Text, StyleSheet, View, ActivityIndicator, Platform, TextInput, Button, } from 'react-native';
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Please enter a message");
  const [status, setStatus] = useState("");
  const [textInput, setTextInput] = useState('');

  const handleSubmit = async () =>{
    const server = Platform.OS === "android" ? "10.0.2.2" : "localhost";
      // const server = "192.168.68.104";
      const url = `http://${server}:3000/echo/${textInput}`;
      console.log(url);
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        setStatus(result.status);
        setMessage(result.message);
      } catch (e) {
        setMessage("Fail to load page, error: ", e.toString());
      } finally {
        setIsLoading(false);
      }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Echo Client</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={setTextInput}
          placeholder='Enter message here to send to server'
        />
        <Button title="Echo" onPress={handleSubmit} />
        <Text style={styles.text}>
          Status: {status}
        </Text>
        <Text style={styles.text}>
          Message: {message}
        </Text>
        {isLoading && <ActivityIndicator size="large" color="blue" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  body: {
    width: '100%',
    padding: 20,
    height: '80%',
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});
