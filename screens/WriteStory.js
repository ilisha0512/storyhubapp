import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Header } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import db from '../Config'

export default class WriteScreen extends React.Component {

  constructor(){
    super()
  }

  render(){
    return(
      <View>
        <TextInput
        placeholder = "Heading"
        onChangeText = {(text)=>{
        }}
        />
        <TextInput
        placeholder = "Author"
        onChangeText = {(text)=>{
        }}
        />
        <TextInput
        placeholder = "Write Your Story"
        onChangeText = {(text)=>{
        }}
        />
        <TouchableOpacity>
         <Text>
           Submit  
         </Text> 

        </TouchableOpacity>
        
      </View>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
