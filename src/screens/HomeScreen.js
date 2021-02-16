import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native'
import { CustomHeader, NewsCard } from '../components'
import { COLOR } from '../styles/Color'
import { FONT } from '../styles/Dimensions'
import { useDispatch, useSelector } from 'react-redux'
import HeadlineTypes from '../redux/actions/HeadlineTypes'

const HomeScreen = () => {
  const [hour, setHour] = useState()
  const [greeting, setGreeting] = useState()

  const date = new Date()
  const time = date.getHours()

  useEffect(() => {
    setHour(time)
    setGreetingMessage()
    getHeadlineData()
  }, [])

  const setGreetingMessage = () => {
    if (hour > 0 && hour < 12) {
      setGreeting('Good morning')
    } else if (hour === 12) {
      setGreeting('Good noon')
    } else if (hour > 12 && hour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }

  const dispatch = useDispatch()
  const headlineData = useSelector(state => state.headline.data)
  const getHeadlineData = () => {
    dispatch({ type: HeadlineTypes.HEADLINE_REQUEST })
  }
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='Headline News' />
      <View style={styles.greetingContainer}>
        <Text style={[FONT.h2, styles.font]}>{greeting}, Diko!</Text>
        <Text style={[FONT.body2, styles.font]}>These are the headline news today.</Text>
      </View>
      <FlatList
        data={headlineData}
        keyExtractor={(news, index) => 'key' + index}
        renderItem={(news) => {
          return (
            <NewsCard
              key={news.item.publishedAt}
              title={news.item.title}
              url={news.item.url}
              author={news.item.author}
              urlToImage={news.item.urlToImage}
              description={news.item.description}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  greetingContainer: {
    alignSelf: 'flex-start',
    padding: 10
  },
  font: {
    color: COLOR.lightDark
  }
})
