import React from 'react'
import { WIDTH } from '../styles/Dimensions'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const IconButton = ({ style, name, onPress, color }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <Ionicons
        name={name}
        color={color}
        size={WIDTH * 0.075}
      />
    </TouchableOpacity>
  )
}

export default IconButton
