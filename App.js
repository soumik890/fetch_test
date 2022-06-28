import { View, Text } from 'react-native'
import React from 'react'
import Isconnect from "./Isconnect.js";

const reach=async()=>{
let IsReached=await Isconnect()
if (IsReached){
   return true
   } 
   else{
      return false
   }
}

const App = async () => {
  //const server=reach()
  let reached= await reach()
  console.log(reached)// Need True or False
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}
export default App