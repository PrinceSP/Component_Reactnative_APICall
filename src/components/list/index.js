import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

// {key,name,username,email,address,phone}

const Card = (props) => {
  return (
    <View style={style.container}>
      <Text>{props.name}</Text>
      <Text>{props.username}</Text>
      <Text>{props.email}</Text>
      <Text>{props.address}</Text>
      <Text>{props.phone}</Text>
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
