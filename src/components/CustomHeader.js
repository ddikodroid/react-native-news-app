import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, HEIGHT, WIDTH } from '../styles/Dimensions'

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerFont}>{title}</Text>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  headerContainer: {
    width: WIDTH,
    height: HEIGHT * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary,
    shadowColor: COLOR.primary,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10
  },
  headerFont: {
    ...FONT.h2,
    color: COLOR.white
  }
})
