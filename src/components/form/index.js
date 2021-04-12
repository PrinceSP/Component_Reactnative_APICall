import React, {useState} from 'react'
import {View,TextInput,Button,Text,StyleSheet} from 'react-native'

const Forms = ()=>{
  const [name,setName] = useState();
  const [username,setUserame] = useState();
  const [email,setEmail] = useState();
  const [address,setAddress] = useState();
  const [number,setPhoneNumber] = useState();

   const onSubmit = ()=>{
    const datas = {
      name:name,
      username:username,
      email:email,
      address:address,
      number:number
    }
    console.log(datas);
  }

  return(
    <View style={style.container}>
      <Text style={{fontWeight:'bold',fontSize:40,marginBottom:30}}>Registration</Text>
      <Text style={style.text1}>Name</Text>
      <TextInput value={name} style={style.textInput} placeholder='input your name' onChangeText={e=>setName(e)} />
      <Text style={style.text1}>Username</Text>
      <TextInput value={username} style={style.textInput} placeholder='input your username' onChangeText={e=>setUserame(e)} />
      <Text style={style.text1}>Email</Text>
      <TextInput value={email} style={style.textInput} placeholder='input your email' onChangeText={e=>setEmail(e)} />
      <Text style={style.text1}>Address</Text>
      <TextInput value={address} style={style.textInput} placeholder='input your address' onChangeText={e=>setAddress(e)} />
      <Text style={style.text1}>Phone Number</Text>
      <TextInput value={number}
        style={{borderRadius:20,
        borderColor: "#666",
        borderWidth:1,
        padding:7,
        marginVertical:10,
        marginBottom:30}}
      placeholder='input your phone number' onChangeText={e=>{setPhoneNumber(e)}}/>
    <Button title='Register' style={style.regButton} onPress={onSubmit}/>
    </View>
  )
}

export default Forms

const style = StyleSheet.create({
  container:{
    padding:20,
  },
  text1:{
    fontSize:19,
    fontWeight:'bold'
  },
  textInput:{
    borderRadius:20,
    borderColor: "#666",
    borderWidth:1,
    padding:7,
    marginVertical:10,
  },
  regButton:{
    borderRadius: 20,
    backgroundColor:"#6fcf97",
    height:20,
    width:188,
    color:"#fff"
  }
})
