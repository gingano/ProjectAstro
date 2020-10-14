import React from 'react'
import { View, Text } from 'react-native'
import horoscopeJson from '../../content/horoscopeArray.json'

const Detailed = () => {
  return (
    <>
      <View>
        <Text>{horoscopeJson[0].main}</Text>
      </View>
    </>
  )
}

export default Detailed
