import React, { Component } from 'react'
import { Image, AsyncStorage } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import { View as Wiki } from '../wiki/'
import { View as List } from '../list/'
import { View as HotList } from '../hotlist/'
import { View as FoodMap } from '../map/'
import { View as Setting } from '../setting/'

export default class Home extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#000',
            height: 0
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('switchStatus', (err, result) => {
            result = result === 'true' ? true : false
            this.props.initSwitchValue(result)
        })
    }

    render() {
        const homeIcon = require('../../resource/imgs/home.png')
        const hotIcon = require('../../resource/imgs/hot.png')
        const mapIcon = require('../../resource/imgs/map.png')
        const settingsIcon = require('../../resource/imgs/settings.png')

        // 根据 isShowNear 判断是否显示地图，将渲染的逻辑放在外面。
        let mapTabBar = null
        if (this.props.isShowNear) {
            mapTabBar = (
                <TabNavigator.Item
                    selected={this.props.selectedTab === 'foodmap'}
                    title="美食地图"
                    renderIcon={() => <Image source={mapIcon} />}
                    onPress={() => this.props.changeSelectedTab('foodmap')}
                >
                    <FoodMap />
                </TabNavigator.Item>
            )
        }

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.props.selectedTab === 'wiki'}
                    title="食品百科"
                    renderIcon={() => <Image source={homeIcon} />}
                    onPress={() => this.props.changeSelectedTab('wiki')}
                >
                    <Wiki navigate={this.props.navigation.navigate} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.props.selectedTab === 'hotlist'}
                    title="热门食品"
                    renderIcon={() => <Image source={hotIcon} />}
                    onPress={() => this.props.changeSelectedTab('hotlist')}
                >
                    <HotList />
                </TabNavigator.Item>

                {/* 设置是否显示 美食地图 */}
                {mapTabBar}

                <TabNavigator.Item
                    selected={this.props.selectedTab === 'setting'}
                    title="设置"
                    renderIcon={() => <Image source={settingsIcon} />}
                    onPress={() => this.props.changeSelectedTab('setting')}
                >
                    <Setting />
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}
