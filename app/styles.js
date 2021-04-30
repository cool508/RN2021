import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({ // styles 상수에 스타일 생성
  container : { // container 스타일을 생성하고 컴포넌트에서는 styles.container로 참조
    marginTop : 150,
    borderColor : '#ededed',
    flexWrap : 'wrap'
  }
})

const buttons = StyleSheet.create({ // 두번째 스타일을 생성하고 button 상수로 저장
  primary : { // primary button을 위한 스타일 생성하고 컴포넌트에서는 buttons.primary로 참조
    flex : 1,
    height : 70,
    borderColor : 'red',
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 20,
    marginRight : 20
  }
})

export { styles, buttons } // styles와 buttons 모두 export해서 외부에서 사용할 수 있도록 한다.