import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { CustomHeader } from '../components'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='Headline News' />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
