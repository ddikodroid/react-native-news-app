import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native'
import { InputField, CustomHeader, StatusBariOS, NewsCard, SmallNewsCard } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import SearchTypes from '../redux/actions/SearchTypes'
import { COLOR } from '../styles/Color'
const SearchNewsScreen = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  const searchResult = useSelector(state => state.search.data)
  const isLoading = useSelector(state => state.search.isLoading)
  const onPressSearch = () => {
    dispatch({ type: SearchTypes.SEARCH_REQUEST, payload: keyword })
  }
  return (
    <>
      <StatusBariOS />
      <SafeAreaView style={styles.container}>
        <CustomHeader title='News by Keyword' />
        <InputField
          placeholder='Search News'
          buttonType='search'
          label='Label'
          onChangeText={(text) => setKeyword(text)}
          onPress={onPressSearch}
        />
        {isLoading
          ? <ActivityIndicator size='large' color={COLOR.primary} />
          : <FlatList
              data={searchResult}
              keyExtractor={(news, index) => 'key' + index}
              renderItem={(news) => {
                return (
                  <SmallNewsCard
                    key={news.item.publishedAt}
                    title={news.item.title}
                    url={news.item.url}
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

export default SearchNewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
