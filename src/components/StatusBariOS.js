import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { COLOR } from '../styles/Color'

const StatusBariOS = () => {
  return (
    <SafeAreaView style={styles.topSafeArea} />

  )
}

export default StatusBariOS

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: COLOR.primary
  }
})
