import React from 'react'
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { addBook } from './actions' // actions 파일의 addBook 함수 가져오기
import { connect } from 'react-redux' // 'react-redux'에서 connect 가져오기

const initialState = {  // name과 author 필드를 포함하는 InitialState 객체 만들기
  name: '',
  author: ''
}
class Books extends React.Component {

  state = initialState // 컴포넌트 state에 initialState 변수의 값을 지정
  
  updateInput = (key, value) => { /* 
    key와 value, 두 개의 인수를 사용하는 updateInput 메서드 만들기
    spread 연산자를 이용해서 state를 업데이트
    spread 연산자는 기존의 state 키 값 쌍들을 새 state에 지정한 후, 새로운 키 값 쌍을 새 state에 추가
    */
    this.setState({
      ...this.state,
      [key]: value
     })
  }
  
  addBook = () => { // dispatchAddBook을 호출함. connect 함수의 props로 참조 가능
    this.props.dispatchAddBook(this.state)
     this.setState(initialState)
  }
  
  
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
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput /* 
              onChangeText의 속성으로 updateInput 메서드를 전달받음.
              updateInput 메서드의 첫 번째 인수에는 'name' 또는 'author',
              두번 째 인수에는 TextInput의 값을 전달 
            */
              value= {this.state.name}
              onChangeText= {value => this.updateInput('name', value)}
              style= {styles.input}
              placeholder= 'Book name'
            />
            <TextInput 
              value= {this.state.author}
              onChangeText= {value => this.updateInput('author', value)}
              style= {styles.input}
              placeholder= 'Author name'
            />
          </View>

          <TouchableOpacity onPress={this.addBook}> {/* addBook 메서드를 호출, View 컴포넌트를 TouchableOpacity 컴포넌트로 감싸서 터치 이벤트를 처리할 수 있게 한다. */}
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  },
  // 새로운 스타일 추가
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
})

const mapStateToProps = (state) => ({ // 리덕스의 상태 객체를 인수로 전달 받고 하나의 키를 포함한 객체를 반환, 이 키는 books배열을 포함하고 있다.    
  books: state.bookReducer.books    
})

const mapDispatchToProps = { // mapDispatchToProps 객체를 생성
  dispatchAddBook: (book) => addBook(book)
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)  // connect 함수의 결과를 외부에 export, mapDispatchToProps를 connect 함수의 두번 째 인수로 전달
