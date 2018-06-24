import React, { Component } from 'react'

import styles from '../styles/App'
import TabNavigator from 'react-native-tab-navigator'

import { Image } from 'react-native'

import Home from './Home'
import List from './List'

class Index extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'lightblue',
            height: 0
        },
        headerTintColor: '#fff'
    }

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="美食百科"
                    badgeText="999"
                    renderIcon={() => (
                        <Image source={require('../resource/imgs/home.png')} />
                    )}
                    onPress={() => this.handleChangeItem('home')}>
                    <Home nav={this.props.navigation} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'list'}
                    title="美食列表"
                    renderIcon={() => (
                        <Image source={require('../resource/imgs/hot.png')} />
                    )}
                    onPress={() => this.handleChangeItem('list')}>
                    <List />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'abc'}
                    title="美食列表"
                    renderIcon={() => (
                        <Image source={require('../resource/imgs/hot.png')} />
                    )}
                    onPress={() => this.handleChangeItem('abc')}>
                    <List />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }

    handleChangeItem(tab) {
        this.setState({
            selectedTab: tab
        })
    }
}

export default Index
