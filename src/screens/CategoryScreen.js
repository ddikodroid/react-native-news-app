import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { CustomHeader } from '../components'

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='News by Category' />
      <Text>Category Screen</Text>
    </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
