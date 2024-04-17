import { Text, StyleSheet, View, Image, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';

const url = 'https://geocode.maps.co/search?q=';
const sunurl = 'https://api.sunrisesunset.io/json?';
const apiKey = '661c880095f8e166667460szpa971d9';

export default function App() {
  const [address, setAddress] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchSunRise = async () => {
      try {
        const str = await fetch(sunurl + 'lat=' + latitude + '&lng=' + longitude);
        const data = await str.json();
        console.log("fetchSunRise data for: ", address, data.results);
        const info = {
          sunrise:  data.results?.sunrise, 
          sunset:   data.results?.sunset, 
          timezone: data.results?.timezone};
        setInfo(info);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", error?.message ?? "unknown error ", [{ text: "OK" }]);
      } finally {
        console.log("done fetchSunrise");
      }
    }
    fetchSunRise();
  }, [latitude, longitude]);

  const checkAddress = async () => {
    try{
      if(address==='') throw new Error('Address cannot be empty');
      let urlStr = url + address;
      urlStr += '&api_key=' + apiKey;
      console.log("checkAddess: ", urlStr)
      const res = await fetch(urlStr);
      const data = await res.json();
      console.log("data: ", data[0])
      setDisplayName(data[0].display_name);
      setLatitude(data[0].lat);
      setLongitude(data[0].lon);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error?.message ?? "unknown error ", [{ text: "OK" }]);
    } finally {
      console.log("done checkAddress");
    };
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        onSubmitEditing={checkAddress}
        placeholder='Please input an address'
      />
      <Text>Name: {displayName}</Text>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <Text>Sunrise: {info.sunrise}</Text>
      <Text>Sunset: {info.sunset}</Text>
      <Text>Timezone: {info.timezone}</Text>
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