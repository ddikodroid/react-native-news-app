import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, HEIGHT, WIDTH } from '../styles/Dimensions'

const NewsCard = ({ title, url, author, urlToImage, description }) => {
  const handleOnPress = () => {
    Linking.openURL(`${url}`)
      .catch((error) => Alert.alert(error))
  }
  return (
    <TouchableOpacity style={styles.card} onPress={handleOnPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Image style={styles.image} source={{ uri: urlToImage }} />
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({
  card: {
    margin: WIDTH * 0.02,
    borderRadius: WIDTH * 0.05,
    backgroundColor: COLOR.white,
    padding: WIDTH * 0.04,
    shadowColor: COLOR.ligtDark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10
  },
  title: {
    color: COLOR.moreDark,
    ...FONT.h2
  },
  description: {
    paddingTop: 5,
    color: COLOR.moreDark,
    ...FONT.body3
  },
  image: {
    height: HEIGHT * 0.2,
    resizeMode: 'cover',
    borderRadius: WIDTH * 0.02
  },
  author: {
    ...FONT.body4,
    color: COLOR.secondary
  }
})
