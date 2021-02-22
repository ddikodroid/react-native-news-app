import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'

import Svg, { Path } from 'react-native-svg'
import { COLOR } from '../styles/Color'
import { HEIGHT, WIDTH } from '../styles/Dimensions'

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  const isSelected = accessibilityState.selected
  if (isSelected) {
    return (
      <View style={styles.tabView}>
        <View style={styles.tab}>
          {/* <View style={{flex: 1, backgroundColor: COLOR.transparent}}></View> */}
          <Svg width={75} height={61} viewBox='0 0 75 61'>
            <Path
              d='M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z'
              fill={COLOR.transparent}
            />
          </Svg>
          {/* <View style={{flex: 1, backgroundColor: COLOR.transparent}}></View> */}
        </View>
        <TouchableOpacity
          style={{ ...styles.touch1, ...styles.shadow }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <TouchableOpacity
        style={styles.touch2}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

export default TabBarCustomButton

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLOR.primary,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  tabView: {
    flex: 1,
    alignItems: 'center'
  },
  tab: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0
  },
  touch1: {
    top: -HEIGHT * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.15,
    height: HEIGHT * 0.065,
    borderRadius: WIDTH * 0.25,
    backgroundColor: COLOR.primary
  },
  touch2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.25,
    height: HEIGHT * 0.05,
    backgroundColor: COLOR.transparent
  }
})
