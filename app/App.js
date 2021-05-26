import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ViewComponent} from 'react-native'; // react-native에서 Image 컴포넌트 가져오기
import { styles } from './styles';

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
          <View>
            <Text style={styles.cardName}>
              {/* 인물 이름을 보여주는 Text 컴포넌트 */}
              J.B BAE
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
          {/* 직업을 표시하는 Text 컴포넌트의 컨테이너, 직업과 프로필 소개를 구분하는 하단 테두리(bottom border)을 지정 */}
            <Text style={styles.cardOccupation}>
            {/* 작업을 표시하는 Text */}
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
            {/* 인물의 프로필 설명 */}
              J.B is really great javaScript developer.
              He loves using JS to build React Native applications for iOS and Android. 
            </Text>
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
  },
  cardName: { // 이름 표시 Text 컴포넌트의 색상은 white
    color: 'white',
    marginTop: 30
  },
  cardOccupationContainer: { // 작업 영역의 스타일
    borderColor: 'black',
    borderWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  cardOccupation: { // 작업을 표시하는 Text 컴포넌트에 적용된 스타일(위치를 지정하는 스타일만 포함)
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: { // 프로필 Text 스타일
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
});

export default App;