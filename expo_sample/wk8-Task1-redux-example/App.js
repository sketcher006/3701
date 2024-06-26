// App.js
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { Counter } from "./src/component/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
