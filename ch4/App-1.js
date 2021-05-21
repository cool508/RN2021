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