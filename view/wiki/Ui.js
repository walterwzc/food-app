import React from 'react'

import {
    TouchableWithoutFeedback,
    StatusBar,
    View,
    Dimensions,
    ScrollView,
    TextInput,
    Text,
    Image
} from 'react-native'

import styles from './style.js'

export default class Wiki extends React.Component {
    componentDidMount() {
        this.props.getWikiInfo()
    }

    render() {
        const { width } = Dimensions.get('window')
        const itemWidth = (width - 20) / 3
        const itemImgWidth = itemWidth - 20
        const bannerImg = require('../../resource/imgs/banner.png')
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View>
                    <Image source={bannerImg} style={{ width: width }} />
                    <TextInput
                        style={[styles.search, { top: width * 0.4 }]}
                        placeholder="请输入搜索内容"
                        underlineColorAndroid="#fff"
                    />
                </View>
                <ScrollView style={styles.content}>
                    <View style={styles.list}>
                        {this.props.categories.map(item => {
                            return (
                                <TouchableWithoutFeedback
                                    key={item.id}
                                    onPress={() => {
                                        this.props.navigate('List', {
                                            id: item.id
                                        })
                                    }}
                                >
                                    <View
                                        style={[
                                            { width: itemWidth },
                                            styles.item
                                        ]}
                                    >
                                        <Image
                                            source={{ uri: item.imgUrl }}
                                            style={[
                                                {
                                                    width: itemImgWidth,
                                                    height: itemImgWidth
                                                },
                                                styles.itemImg
                                            ]}
                                        />
                                        <View>
                                            <Text style={styles.itemTitle}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
