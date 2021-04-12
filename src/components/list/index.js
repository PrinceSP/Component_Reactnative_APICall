import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

// {key,name,username,email,address,phone}

const Card = (props) => {
  return (
    <View style={style.container}>
      <Text>Name: {props.name}</Text>
      <Text>Username: {props.username}</Text>
      <Text>Email {props.email}</Text>
      <Text>Address: {props.address}</Text>
      <Text>Phone: {props.phone}</Text>
    </View>
  )
}

export default Card

const style = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginVertical:10,
    borderColor:"#777",
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20
  }
})
