
import { Text, View, Button } from 'react-native';


import {styleko} from './style.js';
export default function App() {
 return (
    <View style={styleko.container}>
      <Text style={styleko.title}>Welcome to Cabili simple Static Ui!</Text>
      <Text style={styleko.subtitle}>Activity 2 Static App UI.</Text>



      <Button title="Sign in" onPress={() => alert("Button pressed!")} />
    </View>
  );
}

