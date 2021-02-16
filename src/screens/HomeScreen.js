import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { CustomHeader, NewsCard } from '../components'
import { COLOR } from '../styles/Color'
import { FONT } from '../styles/Dimensions'

const HomeScreen = () => {
  const [hour, setHour] = useState()
  const [greeting, setGreeting] = useState()
  const date = new Date()
  const time = date.getHours()
  useEffect(() => {
    setHour(time)
    setGreetingMessage()
  }, [time])
  const setGreetingMessage = () => {
    if (hour > 0 < 12) {
      setGreeting('Good morning')
    } else if (hour === 12) {
      setGreeting('Good noon')
    } else if (hour > 12 < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }
  const article = {
    source: {
      id: null,
      name: 'Investing.com'
    },
    author: 'Reuters',
    title: 'World stocks look to extend bull run to 12th day on economic optimism By Reuters - Investing.com',
    description: 'Asia sets up global stocks for extended bull run on economic optimism',
    url: 'https://www.investing.com/news/economic-indicators/world-stocks-look-to-extend-bull-run-to-12th-day-on-economic-optimism-2419201',
    urlToImage: 'https://i-invdn-com.akamaized.net/news/indicatornews_3_800x533_L_1412601605.jpg',
    publishedAt: '2021-02-16T00:55:00Z',
    content: 'By Hideyuki Sano\r\nTOKYO (Reuters) - Asian shares advanced on Tuesday, putting world equities on course to extend their bull run for a 12th consecutive session as optimism about the global economic re… [+3525 chars]'
  }
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title='Headline News' />
      <View style={styles.greetingContainer}>
        <Text style={[FONT.h2, styles.font]}>{greeting}, Diko!</Text>
        <Text style={[FONT.body2, styles.font]}>These are the headline news today.</Text>
      </View>
      <NewsCard article={article} />
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
