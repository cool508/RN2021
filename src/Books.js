import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import { connect } from 'react-redux' // 'react-redux'에서 connect 가져오기

class Books extends React.Component<{}> {
  render() {
    const { books } = this.props // connect함수가 books 배열을 반환하므로(이 예제의 하단 부분 참조)이 배열을 props로 참조 할 수 있다.


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.booksContainer}
        >
          {
            books.map((book, index) => ( // 배열을 매핑해서 각 도서의 이름과 저자를 표시    
              <View style={styles.book} key={index}>    
                <Text style={styles.name}>{book.name}</Text>    
                <Text style={styles.author}>{book.author}</Text>    
              </View>    
            ))    
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  }
})

const mapStateToProps = (state) => ({ // 리덕스의 상태 객체를 인수로 전달 받고 하나의 키를 포함한 객체를 반환, 이 키는 books배열을 포함하고 있다.    
  books: state.bookReducer.books    
})    

export default connect(mapStateToProps)(Books)  // connect 함수의 결과를 외부에 export
