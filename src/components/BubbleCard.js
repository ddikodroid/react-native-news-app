import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, HEIGHT, WIDTH } from '../styles/Dimensions'

const BubbleCard = ({ text, onPress }) => {
  const onClick = () => {
    onPress(text)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.font}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BubbleCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    margin: WIDTH * 0.0075,
    borderRadius: WIDTH * 0.01,
    borderColor: COLOR.secondary,
    paddingVertical: HEIGHT * 0.002,
    paddingHorizontal: WIDTH * 0.01

  },
  font: {
    ...FONT.body4,
    color: COLOR.secondary,
    fontWeight: '700'
  }
})
