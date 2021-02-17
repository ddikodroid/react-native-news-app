import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { BubbleCard, CustomHeader, StatusBariOS } from '../components'
import { COLOR } from '../styles/Color'
import { HEIGHT } from '../styles/Dimensions'

const CategoryScreen = () => {
  const newsCategories = ['Finance', 'Sport', 'Otomotive', 'Technology', 'Travel', 'Health', 'Movies', 'Music', 'Adventure', 'Animal']
  return (
    <>
      <StatusBariOS />
      <SafeAreaView style={styles.container}>
        <CustomHeader title='News by Category' />
        <View style={styles.categoryContainer}>
          {newsCategories.map((c) => <BubbleCard key={c} text={c} />)}
        </View>

      </SafeAreaView>
    </>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  categoryContainer: {
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: HEIGHT * 0.01
  }
})
