import { Dimensions, Platform, PixelRatio } from 'react-native'
import { COLOR } from './Color'
export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

const scale = WIDTH / 375

export function scaleFontSize (size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const SIZE = {
  xxl: scaleFontSize(34),
  xl: scaleFontSize(28),
  l: scaleFontSize(20),
  m: scaleFontSize(17),
  s: scaleFontSize(15),
  xs: scaleFontSize(13),
  xxs: scaleFontSize(12)
}

export const FONT = {
  h0: {
    fontWeight: '800',
    fontSize: SIZE.xxl,
    lineHeight: SIZE.xxl + 5
  },
  h1: {
    fontWeight: '700',
    fontSize: SIZE.xl,
    lineHeight: SIZE.xl + 6
  },
  h2: {
    fontWeight: '700',
    fontSize: SIZE.l,
    lineHeight: SIZE.l + 8
  },
  h3: {
    fontWeight: '500',
    fontSize: SIZE.m,
    lineHeight: SIZE.m + 6
  },
  h4: {
    fontWeight: '500',
    fontSize: SIZE.s,
    lineHeight: SIZE.s + 8
  },
  body1: {
    fontWeight: '300',
    fontSize: SIZE.xl,
    lineHeight: SIZE.xl + 6
  },
  body2: {
    fontWeight: '300',
    fontSize: SIZE.l,
    lineHeight: SIZE.l + 8
  },
  body3: {
    fontWeight: '300',
    fontSize: SIZE.m,
    lineHeight: SIZE.m + 6
  },
  body4: {
    fontWeight: '300',
    fontSize: SIZE.s,
    lineHeight: SIZE.s + 8
  },
  body5: {
    fontWeight: '300',
    fontSize: SIZE.xs,
    lineHeight: SIZE.xs + 8
  },
  placeholder: {
    fontWeight: '300',
    fontSize: SIZE.m
  },
  button1: {
    fontWeight: '500',
    fontSize: SIZE.m
  },
  inputFieldText: {
    fontWeight: '500',
    fontSize: SIZE.m,
    color: COLOR.black
  }
}
