import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, HEIGHT, WIDTH } from '../styles/Dimensions'

const NewsCard = ({ title, url, author, urlToImage, description }) => {
  const handleOnPress = () => {
    Linking.openURL(`${url}`)
      .catch((error) => Alert.alert(error))
  }
  return (
    <TouchableOpacity style={styles.card} onPress={handleOnPress}>
      <View style={{ justifyContent: 'center', width: '30%', padding: WIDTH * 0.005, marginRight: WIDTH * 0.002 }}><Image style={styles.image} source={{ uri: urlToImage }} /></View>
      <View style={{ justifyContent: 'center', width: '70%', padding: WIDTH * 0.005 }}><Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description.slice(0, 95)}...</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({
  card: {
    margin: WIDTH * 0.02,
    flexDirection: 'row',
    borderRadius: WIDTH * 0.025,
    backgroundColor: COLOR.white,
    padding: WIDTH * 0.02,
    shadowColor: COLOR.ligtDark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },

  title: {
    color: COLOR.moreDark,
    marginBottom: HEIGHT * 0.005,
    ...FONT.titleSmall
  },
  description: {
    color: COLOR.moreDark,
    ...FONT.descriptionSmall
  },
  image: {
    height: HEIGHT * 0.125,
    resizeMode: 'cover',
    borderRadius: WIDTH * 0.02
  },
  author: {
    ...FONT.body4,
    color: COLOR.secondary
  }
})
