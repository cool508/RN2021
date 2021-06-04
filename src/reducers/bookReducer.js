import {  } from "react";

const initialState = { // 초기 상태 만들기
  books: [{ 
    name: 'East of Eden', 
    auther: 'Jhon Steinbeck'
  }]
}

const bookReducer = (state = initialState) => { //state 인수의 기본 값을 initialState로 지정
  return state // state를 반환
}

export default bookReducer