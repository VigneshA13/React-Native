import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ref, set, push, child, update, onValue, remove } from "firebase/database";
import { db } from './components/config';

export default function App() {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  

  function create () {

   // const newkey = push(child(ref(database), 'users')).key;

    update(ref(db, 'users/' + username), {
      username: username,
      email: email
    }).then(() => {
      //Data saved successfully
      alert('Data Updated Successfully.')
    }).catch((error) => {
      //the write failed
      alert(error)
    });
  };

  function readData () {
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    setEmail(data.email);
  });
  }

  function deleteData () {
    remove(ref(db, 'users/' + username));
    alert('Data removed Successfully.')
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:28}}>Firebase Operations</Text>
      <TextInput 
          value={username} 
          onChangeText={(username) => {setName(username)}}
          placeholder="username" 
          style={styles.textbox}>
      </TextInput>
      <TextInput 
          value={email} 
          onChangeText={(email) => {setEmail(email)}}
          placeholder="Email" 
          style={styles.textbox}>
      </TextInput>

      <Button
        onPress={ create }
        title="submit Data."
        color="#841584"
      />
      <Button
        onPress={ readData }
        title="Select Data."
        color="#841584"
      />
      <Button
        onPress={ deleteData }
        title="Delete Data."
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    width: '80%',
    fontSize: 18,
    padding: 12,
    borderColor: 'black',
    borderWidth: 0.7,
    marginTop: 25,
  }, 
 
});
