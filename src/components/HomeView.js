import React from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { useSelector, useDispatch } from 'react-redux'

const HomeView = () => {
  const signState = useSelector(({ sign }) => sign)
  const dispatch = useDispatch()

  console.log(signState)

  return (
    <>
      <View>
        <Text>Home</Text>
        <Button
          title="Detailed"
          onPress={() => {
            Actions.detailed()
          }}
        />
      </View>
    </>
  )
}

export default HomeView
