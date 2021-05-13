## #React_Natve 2021

## 2021/05/07

> 4. 리액트 네이티브에서 스타일 적용하고 관리하기

<!-- 예제 4.7 -->
<details>
  <summary>예제 4.7) Profile Card 컴포넌트를 위한 초기 형태(App.js)</summary>
  <br>
  
```javascript
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class App extends Component {
  render() { 
    return (
      <View style = { styles.container }> 
        {/* 자식 컴포넌트를 중앙 정렬하는 가장 바깥쪽의 View 컴포넌트 */}
        <View styles = { styles.cardContainer } />
      </View>
    );
  }
}
const profileCardColor = 'dodgerblue'; // 여러 곳에서 사용할 경우를 대비해서 프로필카드의 색상를 변수에 정의함
const styles = StyleSheet.create({
  container: { // 가장 바깥쪽 컴포넌트가 사용할 스타일
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: { // 프로필 카드에서 사용할 스타일
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  }
});
```
</details>

<!-- border 속성 지정 -->
<details>
  <summary>중간고사 리뷰</summary>
  <br>
  1. Class형태의 component의 선언방법
  <br>
  2. 함수 형태의 component의 선언방법
  <br>
  3. state 설정 및 초기화 방법
  <br>
  4. props의 개념 및 전달 경로
  <br>
  5. state에 초기화된 값을 props로 전달하는 방법
  <br>
  6. 일반 변수로 초기화 된 값을 props로 전달하는 방법
  <br>
  7. 구조분해(비구조화) 할당(Destructuring Assignment)을 통한 변수명 재할당
  <br>
  [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  <br>
  8. 필요한 component만 import하기
  <br>
    9. Props를 전달받아 사용하기
  <br>
  10. index.js에 App 지정
</details>

## 2021/04/30

> 4. 리액트 네이티브에서 스타일 적용하고 관리하기

<!-- 예제 4.3 -->
<details>
<summary>예제 4.3) 컴포넌트의 스타일시트를 외부로 분리하기(component 폴더 내에 styles.js)</summary>
<br>

```javascript
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // styles 상수에 스타일 생성
  container: {
    // container 스타일을 생성하고 컴포넌트에서는 styles.container로 참조
    marginTop: 150,
    borderColor: '#ededed',
    flexWrap: 'wrap',
  },
});

const buttons = StyleSheet.create({
  // 두번째 스타일을 생성하고 button 상수로 저장
  primary: {
    // primary button을 위한 스타일 생성하고 컴포넌트에서는 buttons.primary로 참조
    flex: 1,
    height: 70,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export {styles, buttons}; // styles와 buttons 모두 export해서 외부에서 사용할 수 있도록 한다.
```

</details>
  
<!-- 예제 4.4 -->
<details>
  <summary>예제 4.4) 외부 스타일시트 가져오기</summary>
  <br>
  
  ```javascript
  import React, { Component } from 'react'
  import { Text, View, TouchableHighlight } from 'react-native'
  import { styles, buttons } from './component/styles'
  export default class App extends Component {
    render() {
      return (
        // style.js 파일에 정의된 styles.container 스타일 참조
        <View style = { styles.container }>
          <TouchableHighlight styles = { buttons.primary }>
            <Text>Sample Text</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
  ```
</details>

<!-- 예제 4.5 -->
<details>
  <summary>예제 4.5) 컴포넌트 파일에서 사용하게 될 외부로 분리한 스타일(styles.js)</summary>
  <br>

```javascript
...
export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  width: 150,
  height: 150,
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    borderColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    backgroundColor: Colors.light,
  },
});

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
...
```

</details>

<!-- 예제 4.6 -->
<details>
  <summary>예제 4.6) 밝은색과 어두운색 테마를 토글하는 앱(App.js)</summary>
  <br>

```javascript
import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import getStyleSheet from './styles'; // 외부로 분리해 둔 getStyleSheet 함수 가져오기

export default class App extends Component {
  constructor(props) {
    super(props);
    this,
      (state = {
        darkTheme: false, // 기본 테마 색을 밝은색으로 컴포넌트의 state 초기화하기
      });
    this.toggleTheme = this.toggleTheme.bind(this); // 예외가 발생하지않도록 toggleTheme함수를 컴포넌트에 bind
  }

  toggleTheme() {
    this.setState({darkTheme: !this.state.darkTheme}); // 호출 할 때 마다 스타일을 toggle
  }
  render() {
    // 표시할 테마에 적합한 스타일시트를 가져오기 위해 getStyleSheet 함수 사용
    const styles = getStyleSheet(this.state.darkTheme);
    const backgroundColor = StyleSheet.flatten(styles.container)
      .backgroundColor; // backgroundColor를 쉽게 사용하려면 StyleSheet의 flatten을 이용해서 StyleSheet객체를 JavaScript 객체로 변환

    return (
      // style.js 파일에 정의된 styles.container 스타일 참조
      <View style={styles.container}>
        {/* 프로필 카드를 수평축에서 중앙으로 정렬 */}
        <View styles={styles.box}>
          {/* 테마의 styles.box 참조 */}
          <Button title={backgroundColor} onPress={this.toggleTheme} />
          {/* 사용 중인 테마의 색상을 텍스트로 표시하고, 버튼이 클릭되면 toggleTheme 호출*/}
        </View>
      </View>
    );
  }
}
```

</details>

## 2021/04/23

중간고사

## 2021/04/16

> 2. todo 앱 레이아웃 작성하기( 이어서 하기)

- 예제 3.14) Todo 컴포넌트 만들기
- 예제 3.15) TodoList 컴포넌트 만들기
- 예제 3.16) TodoList 컴포넌트 가져오기
- 예제 3.17) toggleComplete와 deleteTodo 메소드 추가하기
- 예제 3.18) TodoButton.js 파일 작성하기
- 예제 3.19) toggleComplete와 deleteTodo를 TodoList에 props로 전달하기
- 예제 3.20) toggleComplete와 deleteTodo를 Todo에 props로 전달하기
- 예제 3.21) Todo.js를 갱신해 TodoButton과 기능을 적용하기
- 예제 3.22) setType 메소드 추가하기
- 예제 3.23) TabBar 컴포넌트 만들기
- 예제 3.24) TabBarItem 컴포넌트 만들기
- 예제 3.25) TabBar 컴포넌트 구현
- 예제 3.26) TodoList 컴포넌트 갱신하기

## 2021/04/09

> 1. todo 앱 레이아웃 작성하기

- 예제 3.1) 간단한 todo앱 구현

> 2. 예제 3.2) todo 앱 코드 작성하기

- 예제 3.3) App.js 코드 작성
- 예제 3.4) 초기 state의 설정
- 예제 3.5) Heading 컴포넌트 만들기
- 예제 3.6) Heading 컴포넌트 App으로 가져와 사용
- 예제 3.7) TextInput 컴포넌트 만들기
- 예제 3.8) inputChange 매서드 작성
- 예제 3.9) inputChange와 inputValue를 TextInput에 추가
- 예제 3.10) submitTodo 매서드 추가하기
- 예제 3.11) todoIndex 변수 생성하기
- 예제 3.12) Button 컴포넌트 만들기
- 예제 3.13) Button 컴포넌트 가져오기

## 2021/04/02

> 1. 리액트 컴포넌트 스펙

- render메서드로 UI 만들기
- 속성 초기화와 생성자 사용하기

> 2.  리액트 생명주기 메서드

- static getDerivedStateFronProps 메서드
- componentDidMount 메서드
- shouldComponentUpdate 메서드
- componentWillUpdate 메서드
- componentWillUnmount 메서드

## 2021/03/26

> 1. state를 사용해 컴포넌트 데이터 다루기

- 초기 state 지정
- state 갱신

> 2.  props를 사용해 컴포넌트 데이터 다루기

- 정적 props
- 동적 props
- props와 state의 구조 분해 할당(Destructuring)
- state가 없는 컴포넌트에서 props
- 배열과 개체를 props로 전달하기
