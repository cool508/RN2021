import React from 'react'

import Books from './src/Books' // 예제 8.5에서 만들 Books 컴포넌트 가져오기
import rootReducer from './src/reducers'  // rootReducer 가져오기

import { Provider } from 'react-redux' // react-redux에서 Provider 래퍼(Provider wrapper) 가져오기
import { createStore } from 'redux' // redux에서 createStore 가져오기

const store = createStore(rootReducer)  // rootReducer를 이용해서 store 객체 생성

export default class App extends React.Component {
  render() {
    return (
      // Provider 컴포넌트로 감싼 Books 컴포넌트 반환, Provider의 prop으로 store 전달
      <Provider store={store} > 
        <Books />
      </Provider>    
    )
  }
}
