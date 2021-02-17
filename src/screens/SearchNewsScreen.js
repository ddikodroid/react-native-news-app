import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { InputField, CustomHeader, StatusBariOS } from '../components'

const SearchNewsScreen = () => {
  return (
    <>
      <StatusBariOS />
      <SafeAreaView style={styles.container}>
        <CustomHeader title='News by Keyword' />
        <InputField placeholder='Search News' buttonType='search' label='Label' />
      </SafeAreaView>
    </>
  )
}

export default SearchNewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
