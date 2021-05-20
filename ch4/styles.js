import { StyleSheet } from 'react-native'

export const Colors = { // 밝은색과 어두운색 테마에 사용할 색상을 저으이하는 상수
  dark : 'black',
  light : 'white'
};

const baseContainerStyles = { // 기본 컨테이너(base container)의 스타일을 저장할 자바스크립트 객체
  flex : 1,
  justifyContent : 'center',
  alignItems : 'center'
};

const baseBoxStyles = { // 기본 상자(base Box) 스타일을 저장할 자바스크립트 객체
  justifyContent : 'center',
  alignItems : 'center',
  borderWidth : 2,
  width : 150,
  height : 150
};

const lightStyleSheet = StyleSheet.create({ // 밝은색 테마에 사용할 스타일 시트 만들기
  container : {
    ...baseContainerStyles,
    backgroundColor : Colors.light
  },
  box : {
    ...baseBoxStyles,
    borderColor : Colors.dark
  }
});

const darkStyleSheet = StyleSheet.create({ // 어두운색 테마에 사용할 스타일 시트 만들기
  container : {
    ...baseContainerStyles,
    borderColor : Colors.dark
  },
  box : {
    ...baseBoxStyles,
    backgroundColor : Colors.light
  }
});

export default function getStyleSheet(useDarkTheme) { // Boolean 값에 따라 해당하는 테마를 반환하는 함수
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
