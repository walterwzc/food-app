import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class FoodMap extends Component {
    render() {
        return <WebView source={{ uri: 'http://www.gp5.com/map.html' }} />
    }
}
