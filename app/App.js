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