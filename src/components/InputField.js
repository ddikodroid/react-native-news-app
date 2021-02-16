import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { FONT, HEIGHT, WIDTH } from '../styles/Dimensions'
import { COLOR } from '../styles/Color'
import IconButton from './IconButton'

const InputField = (props) => {
  const {
    value, onChangeText,
    label, placeholder,
    buttonType, onPress
  } = props
  const [onFocus, setOnFocus] = useState(false)

  const handleFocus = () => {
    setOnFocus(true)
  }
  const handleBlur = () => {
    setOnFocus(false)
  }
  return (
    <View style={styles.fieldContainer}>
      <View style={{
        ...styles.inputContainer,
        borderColor: onFocus
          ? COLOR.primary
          : COLOR.secondary
      }}
      >
        <View style={{
          marginLeft: buttonType
            ? WIDTH * 0.01
            : null,
          ...styles.buttonContainer
        }}
        >{buttonType &&
          <IconButton
            name={buttonType}
            color={onFocus
              ? COLOR.primary
              : COLOR.secondary}
            onPress={onPress}
          />}
        </View>

        <TextInput
          value={value}
          label={label}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={COLOR.secondary}
          style={{
            ...FONT.placeholder,
            ...styles.textInput
          }}
        />
      </View>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  fieldContainer: {
    width: WIDTH * 0.95,
    paddingVertical: WIDTH * 0.025
  },
  inputContainer: {
    borderWidth: 1.5,
    height: HEIGHT * 0.06,
    flexDirection: 'row-reverse',
    borderRadius: WIDTH * 0.025,
    borderColor: COLOR.secondary,
    paddingHorizontal: WIDTH * 0.02

  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    width: '100%',
    paddingVertical: WIDTH * 0.001
  }
})
