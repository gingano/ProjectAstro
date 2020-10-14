import React from 'react'
import { View, Text, Button } from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'

const HomeView = ({ navigation }) => {
  // const signState = useSelector((props) => props)
  // const dispatch = useDispatch()

  return (
    <>
      <View>
        <Text>Home</Text>
        <Button
          onPress={() => {
            navigation.navigate('Detailed')
          }}
          title="Learn More"
        />
      </View>
    </>
  )
}

export default HomeView
