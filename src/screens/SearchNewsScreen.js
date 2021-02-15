import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { CustomHeader } from '../components'

const SearchNewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='News by Keyword' />
      <Text>Search News</Text>
    </SafeAreaView>
  )
}

export default SearchNewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
