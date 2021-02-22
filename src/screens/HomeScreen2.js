import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const HomeScreen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
