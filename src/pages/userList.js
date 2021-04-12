import React, {useState,useEffect} from 'react'
import {View,ScrollView,Text} from 'react-native'
import Card from '../../src/components/list'
import Axios from 'axios'

const UserList = () => {
  const[users,setUsers] = useState([]);

  useEffect(()=>{

    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{setUsers(res.data)})

  },[])

  return (
    <ScrollView>
        {
          users.map(items=>(
            <Card key={items.id}
              name={items.name}
              username={items.username}
              email={items.email}
              address={items.address.city}
              phone={items.phone}/>
          ))
        }

    </ScrollView>
  )
}

export default UserList
