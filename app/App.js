import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native'; // react-native에서 Image 컴포넌트 가져오기

 class App extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage}        
                    source={require('./user.png')}/> 
                    {/* user.png 파일은 앱의 코드와 같은 디렉토리에 위치함 */}
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: { // 프로필카드에 border 속성 추가
    alignItems: 'center', // 프로필 카드를 수평축에서 중앙으로 정렬
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid', // 사용자의 이미지를 수평축에서 중앙으로 정렬
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {   // 이미지 컨테이너(image contanier)는 120x120 크기의 정사각형. borderRadius 속성을 60(120의 반)으로 지정해서 원으로 나타냄
    alignItems: 'center', // 사용자의 이미지를 수평축에서 중앙으로 정렬
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,  // 프로필 카드와 원의 상단의 간격
    paddingTop: 15  // 원과 안쪽 이미지 사이의 간격
  },
  cardImage: {  // 이미지에 적용한 스타일
      width: 80,
      height: 80
  }
});

export default App