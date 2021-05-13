import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
// import getStyleSheet from './Styles'; // 외부로 분리해 둔 getStyleSheet 함수 가져오기
import getStyleSheet from './MyComponentStyles'; // 외부로 분리해 둔 getStyleSheet 함수 가져오기

// export default class App extends Component {
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this,state = {
      darkTheme : false // 기본 테마 색을 밝은색으로 컴포넌트의 state 초기화하기
    }
    this.toggleTheme = this.toggleTheme.bind(this); // 예외가 발생하지않도록 toggleTheme함수를 컴포넌트에 bind
  }

  toggleTheme() {
    this.setState({ darkTheme : !this.state.darkTheme }) // 호출 할 때 마다 스타일을 toggle
  };
  render() { // 표시할 테마에 적합한 스타일시트를 가져오기 위해 getStyleSheet 함수 사용
    const styles = getStyleSheet(this.state.darkTheme);
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor; // backgroundColor를 쉽게 사용하려면 StyleSheet의 flatten을 이용해서 StyleSheet객체를 JavaScript 객체로 변환

    return (
      // style.js 파일에 정의된 styles.container 스타일 참조
      <View style = { styles.container }> 
      {/* 프로필 카드를 수평축에서 중앙으로 정렬 */}
        <View styles = { styles.box }>
          {/* 테마의 styles.box 참조 */}
          <Button title = { backgroundColor } onPress = { this.toggleTheme } />
          {/* 사용 중인 테마의 색상을 텍스트로 표시하고, 버튼이 클릭되면 toggleTheme 호출*/}
        </View>
      </View>
    );
  }
}