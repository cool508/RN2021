## #React_Natve 2021

## 2021/05/21

> 6. 내비게이션

- React Native에는 내비게이션 라이브러리 포함X ∴ 오픈소스 라이브러리 사용
- Wix 개발자들이 개발하고 관리하는 오픈소스 라이브러리
<details>
  <summary>종류</summary>
  
  * 탭(Tab) 내비게이션 : 화면 상단 or 하단에 탭 존재, 탭 누르면 탭과 연결된 화면 이동
  * 스택(stack) 내비게이션 : 현 화면에서 다른 화면 이동, 스택에 있는 이전 or 다음 화면 이동O, 애니메이션도 함께 구현
  * 드로어(drawer) 내비게이션 : 화면 왼쪽 or 오른쪽에서 나오는 메뉴, 옵션 목록 표시, 옵션 선택시 드로어 닫히고 새 화면 이동
</details>

---

> 5. 고급 스타일링 기법

> 5.1 플랫폼별 크기와 스타일

컴포넌트에 적용한 스타일이 플랫폼별로 다르게 보이거나 동작할 수 있다.

<details>
  <summary> 픽셀, 포인트, DP(DPs) </summary>
  
  * Pixels (픽셀) : 디스플레이에 표현되는 프로그래밍 가능한 가장 작은 단위, RGB(빨,초,파)의 색 요소로 구성, PPI가 다른 디바이스에서 밀도가 클수록 작게 표현
  * DP : 안드로이드 사이즈 단위, PPI가 다른 디바이스에서 동일한 비율 표현 
  * Points : iOS 사이즈 단위, DP 와 같은 역할
</details>
<details>
  <summary>shadowPropTypesIOS와 elevation 속성으로 음영 넣기</summary>
  
  * shadowPropTypesIOS : iOS에서 음영 추가
  * elevation : android에서 음영 추가, 큰 효과는 없음 ∴ 포기하거나 npm이나 yarn 컴포넌트 설치
  * Platform.select를 사용함
    ```javascript
      ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
    ```
</details>
<!-- 예제 5.1 -->
<details>
  <summary>예제 5.1 ProfileCard에 음영 효과 넣기</summary>

```javascript
import React, {Component} from 'react';

import {Image, StyleSheet, View, Text, Platform} from 'react-native'; // 프로그램에서 플랙폼에 따라 스타일을 선택 할 수 있도록 Platform 유틸리티 가져오기
  ...
const styles = StyleSheet.create({
  ...
  cardContainer: {
    ...
    height: 400,
    ...Platform.select({
      // 플랫폼에 따라 카드 컨테이너에 음영 넣기
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImageContainer: {
    ...
    paddingTop: 15,
    ...Platform.select({
      // 원형 이미지에 음영 넣기
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15,
      },
    })
  },
  ...
```

</details>
<br>

> 5.2 컴포넌트를 이동, 회전, 크기 변경, 기울이기

<details>
  <summary>transform</summary>
  
    ```javascript
      transform: [{
        perspective: // 사용자와 화면 사이의 거리를 조정
        translateX, translateY: // x 축 또는 y축 따라 이동
        rotateX, rotateY, rotateZ: // x 축 또는 y축 또는 z 축 따라 화전
        scale, scaleX, scaleY: // 물체의 크기를 변경
        skewX, skewY: // x축과 y축을 따라 기울이기
      }]
    ```
</details>
<br>

> 5.3 flexbox를 이용해서 컴포넌트 배치

---

> 4.3 Text 컴포넌트에 스타일 적용하기

<!-- 예제 4.17 -->
<details>
  <summary>예제 4.17) 프로필 카드의 Text 폰트 스타일 적용하기 (app/App.js)</summary>
  <br>
  
```javascript
  import React, { Component } from 'react';
  import { Image, StyleSheet, View, Text} from 'react-native'; 
  
   class App extends Component {
    render() { 
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}        
                      source={require('./user.png')}/> 
            </View>
            <View>
              <Text style={styles.cardName}>
                J.B BAE
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                React Native Developer
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
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
    cardContainer: { 
      alignItems: 'center', 
      borderColor: 'black',
      borderWidth: 3,
      borderStyle: 'solid', 
      borderRadius: 20,
      backgroundColor: profileCardColor,
      width: 300,
      height: 400
    },
    cardImageContainer: {   
      alignItems: 'center', 
      backgroundColor: 'white',
      borderWidth: 3,
      borderColor: 'black',
      width: 120,
      height: 120,
      borderRadius: 60,
      marginTop: 30,  
      paddingTop: 15  
    },
    cardImage: {  
      width: 80,
      height: 80
    },
    cardName: { 
      color: 'white',
      fontWeight: 'bold', // 이름 부분 bold 처리
      fontSize: 24, // 이름 부분 폰트크기 24
      marginTop: 30
    },
    cardOccupationContainer: { 
      borderColor: 'black',
      borderWidth: 3,
    },
    cardOccupation: { 
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10
    },
    cardDescription: { 
      fontStyle: 'italic', // 설명 부분 이텔릭체 사용
      marginTop: 10,
      marginRight: 40,
      marginLeft: 40,
      marginBottom: 10
    }
  });
  
  export default App
```
</details>
<details>
  <summary> Text 컴포넌트 VS View 컴포넌트 </summary>
  View에서 사용되는 대부분의 스타일을 Text에서도 사용O (Flex 속성X)
  <br>
  But 반대로 Text에서 사용하는 스타일은 View에서 사용 X
</details>
<details>
  <summary> 폰트 스타일 </summary>
  
  * fontFamily : CSS와 다르게 fontFamily 속성에 여러 폰트 지정X
    * iOS에서는 monospace 옵션 사용X -> 사용 시 오류 발생(“Unrecognized font family ‘monospace’”)
  * fontSize : Text 요소의 텍스트 크기 조정, 기본값 14
  * fontStyle : 'normal' 또는 'italic' 만 사용, 기본값 'normal' 
  * fontWeghit : 폰트의 두께 의미, 기본값 'normal' 또는 400
</details>
<details>
  <summary> 텍스트 장식하기 </summary>
  
  * Text 높이 : lineHeight 속성에 값 지정
  * 수평 정렬 : textAlign 속성 auto, center, right, left, justify
    * jusify 는 iOS 에서만 사용 가능
  * 밑줄 또는 취소선
    * textDecorationLine 속성 기본값 'none', 'underline', 'linethrough', 'underline line-through'
    * android와 iOS의 취소선 UI 다름
  * 텍스트에 음영 넣기 : 폰트의 두께 의미, 기본값 'normal' 또는 400
    ```javascript
      textShadowColor:  // 색상
      textShadowOffset: // 오프셋(offset) : 음영 효과를 갖는 컴포넌트에서 음영 위치 지정 
      textShadowRadius: // 반경(Radius) : 음영을 얼마나 흐릿하게 표시 할지 지정
    ```
</details>
<!-- 예제 4.15 -->
<details>
  <summary>예제 4.15) 프로필 카드에 텍스트 추가하기 (app/App.js)</summary>
  <br>
  
```javascript
  import React, { Component } from 'react';
  import { Image, StyleSheet, View, Text} from 'react-native'; 
  
   class App extends Component {
    render() { 
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}        
                      source={require('./user.png')}/> 
            </View>
            <View>
              <Text style={styles.cardName}>
                {/* 인물 이름을 보여주는 Text 컴포넌트 */}
                J.B BAE
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
            {/* 직업을 표시하는 Text 컴포넌트의 컨테이너, 직업과 프로필 소개를 구분하는 하단 테두리 (bottom border)을 지정 */}
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
    cardContainer: {
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 3,
      borderStyle: 'solid', 
      borderRadius: 20,
      backgroundColor: profileCardColor,
      width: 300,
      height: 400
    },
    cardImageContainer: {   
      alignItems: 'center', 
      backgroundColor: 'white',
      borderWidth: 3,
      borderColor: 'black',
      width: 120,
      height: 120,
      borderRadius: 60,
      marginTop: 30,  
      paddingTop: 15  
    },
    cardImage: { 
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
  
  export default App
```
</details>

## 2021/05/14

- props의 다루기 부족하다면 예제 2.2 천천히 다시보기

> 4.2 View 컴포넌트에 스타일 적용하기

<!-- 예제 4.14 -->
<details>
  <summary>예제 4.14) 프로필 카드의 스타일을 수정해서 레이아웃을 변경함 (app/App.js)</summary>
  <br>
  
```javascript
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
    cardImageContainer: {   // 이미지 컨테이너(image contanier)는 120x120 크기의 정사각형. borderRadius   속성을 60(120의 반)으로 지정해서 원으로 나타냄
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
```
</details>
<!-- 예제 4.10 -->
<details>
  <summary>예제 4.10) 프로필 카드에 border 속성 적용하기 (app/App.js)</summary>
  <br>
  
```javascript
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
      borderColor: 'black',
      borderWidth: 3,
      borderStyle: 'solid', // 사용자의 이미지를 수평축에서 중앙으로 정렬
      borderRadius: 20,
      backgroundColor: profileCardColor,
      width: 300,
      height: 400
    },
    cardImageContainer: {   // 이미지 컨테이너(image contanier)는 120x120 크기의 정사각형. borderRadius 속성을 60(120의 반)으로 지정해서 원으로 나타냄
      backgroundColor: 'white',
      borderWidth: 3,
      borderColor: 'black',
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    cardImage: {  // 이미지에 적용한 스타일
        width: 80,
        height: 80
    }
  });
  
  export default App
```
</details>

<details>
  <summary>border 속성 지정하기</summary>
  <br>
   borderColor,	borderRadius,	borderStyle, borderWidth 속성 존재
   borderColor, borderStyle, borderWidth은 속성에 방향( top - right - bottom - left )을 추가하여 세부적 속성 만듬
   
   ```javascript
    <Example style={{borderWidth: 1, borderLeftColor: 'red',borderStyle: 'dashed'}}>
   ```
   borderRadius를 이용하여 모양 만들기
   ```javascript
    // 한번에 지정 가능 -> borderRadius : [TopRight], [BottomRight], [BottomLeft], [TopLeft]
    <Example style={{borderRadius: 60}}>
    <Example style={{borderTopRightRadius: 20, borderBottomRightRadius: 20}}>
   ```
</details>
<details>
  <summary> Margin과 Padding 지정하기</summary>
  <br>
   margin 속성 padding CSS와 비슷
  <br>
   
   ```javascript
    <Example style={{margin: 20 ,padding: 50}}>
    <Example style={{marginLeft: 20 ,paddingRight: 50}}>
   ```
  <br>
   Position을 이용하여 컴포넌트 배치 : CSS와 유사하지만 CSS만큼 다양한 옵션( static, fixed) 지원 X 
  <br>
   
   ```javascript
    <Example style={{position: 'absolute', right: 0, bottom: 0}}>
   ```
</details>

## 2021/05/07

> 4. 리액트 네이티브에서 스타일 적용하고 관리하기

<!-- 예제 4.7 -->
<details>
  <summary>예제 4.7) Profile Card 컴포넌트를 위한 초기 형태(App.js)</summary>
  <br>

```javascript
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 자식 컴포넌트를 중앙 정렬하는 가장 바깥쪽의 View 컴포넌트 */}
        <View styles={styles.cardContainer} />
      </View>
    );
  }
}
const profileCardColor = 'dodgerblue'; // 여러 곳에서 사용할 경우를 대비해서 프로필카드의 색상를 변수에 정의함
const styles = StyleSheet.create({
  container: {
    // 가장 바깥쪽 컴포넌트가 사용할 스타일
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    // 프로필 카드에서 사용할 스타일
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
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
