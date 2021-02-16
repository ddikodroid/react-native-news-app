import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, HEIGHT, WIDTH } from '../styles/Dimensions'

const NewsCard = ({ article }) => {
  const handleOnPress = () => {
    Linking.openURL(`${article.url}`)
      .catch((error) => Alert.alert(error))
  }
  return (
    <TouchableOpacity style={styles.card} onPress={handleOnPress}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>{article.author}</Text>
      <Image style={styles.image} source={{ uri: article.urlToImage }} />
      <Text style={styles.description}>{article.description}</Text>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({
  card: {
    margin: WIDTH * 0.02,
    borderRadius: WIDTH * 0.05,
    backgroundColor: 'white',
    padding: WIDTH * 0.04
  },
  title: {
    color: COLOR.moreDark,
    ...FONT.h2
  },
  description: {
    color: COLOR.moreDark,
    ...FONT.body3
  },
  image: {
    height: HEIGHT * 0.3,
    resizeMode: 'cover'
  },
  author: {
    ...FONT.body4,
    color: COLOR.secondary
  }
})
