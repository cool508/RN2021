export const ADD_BOOK = 'ADD_BOOK' // 리듀서에서 재사용할 수 있도록 ADD_BOOK 상수를 만들어서 export

export function addBook(book) { // addBook이라는 함수를 만들고 type 정보와 하나의 인수로 전달된 도서 객체를 반환
  return{
    type: ADD_BOOK,
    book
  }
}