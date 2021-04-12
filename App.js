import React from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
import Forms from './src/components/form'
import UserList from './src/pages/userList.js'


const App = ()=>{
  return(
    <ScrollView>
      {/*<Forms/>*/}
      <UserList/>
    </ScrollView>
  )
}

export default App;
