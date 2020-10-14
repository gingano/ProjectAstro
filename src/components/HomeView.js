import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

const HomeView = () => {
  return (
    <>
      <View>
        <Text>Home</Text>
        <Link to="/detailed">
          <Text>go to detailed</Text>
        </Link>
      </View>
    </>
  )
}

export default HomeView
