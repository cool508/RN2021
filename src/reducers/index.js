import { combineReducers } from 'redux' // redux에서 combineReducers 가져오기

import bookReducer from './bookReducer' // bookReducer 가져오기

const rootReducer = combineReducers({ // 모든 리듀서 포함하는 루트 리듀서(root reducer)만든다. 여기서는 하나의 리듀서(Bookreducer)만 포함
  bookReducer
})

export default rootReducer