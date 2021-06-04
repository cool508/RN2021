import { ADD_BOOK, REMOVE_BOOK } from "../actions"; // actions 파일에서 ADD_BOOK 상수를 가져온다

const initialState = {
  books: [{ 
    name: 'East of Eden', 
    auther: 'Jhon Steinbeck'
  }]
}

const bookReducer = (state = initialState, action ) => { //bookReducer의 두 번째 인수로 액션을 추가
  switch(action.type){
    case ADD_BOOK: 
      return {
        books: [
          ...state.books,
          action.book
        ]
      }
      default: // 해당되지 않으면 기존의 state를 그대로 반환
        return state
  }
}

export default bookReducer