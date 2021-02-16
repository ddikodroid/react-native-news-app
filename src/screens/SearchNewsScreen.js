import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { InputField, CustomHeader, IconButton } from '../components'
import { WIDTH } from '../styles/Dimensions'

const SearchNewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='News by Keyword' />
      <InputField placeholder='Search News' buttonType='search' label='Label' />
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
