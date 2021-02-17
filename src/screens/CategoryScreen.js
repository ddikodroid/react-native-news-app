import React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native'
import { BubbleCard, CustomHeader, NewsCard, StatusBariOS } from '../components'
import { HEIGHT } from '../styles/Dimensions'
import { useDispatch, useSelector } from 'react-redux'
import CategoryTypes from '../redux/actions/CategoryTypes'
import { COLOR } from '../styles/Color'

const CategoryScreen = () => {
  const newsCategories = ['Business', 'Sports', 'Technology', 'Health']
  const dispatch = useDispatch()
  const categoryResult = useSelector(state => state.category.data)
  const isLoading = useSelector(state => state.category.isLoading)
  const onPressCategory = (category) => {
    dispatch({ type: CategoryTypes.CATEGORY_REQUEST, payload: category })
  }
  return (
    <>
      <StatusBariOS />
      <SafeAreaView style={styles.container}>
        <CustomHeader title='News by Category' />
        <View style={styles.categoryContainer}>
          {newsCategories.map((c) => <BubbleCard key={c} text={c} onPress={(c) => onPressCategory(c)} />)}
        </View>
        {isLoading
          ? <ActivityIndicator size='large' color={COLOR.primary} />
          : <FlatList
              data={categoryResult}
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
            />}
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
