import React, { Component } from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import styles from './style'

export default class List extends Component {
    static navigationOptions = {
        title: '列表',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }

    componentDidMount() {
        this.props.getListData()
    }

    render() {
        return (
            <FlatList
                // Pull to Refresh
                onRefresh={this.props.handleListRefresh}

                // 如果需要设置下拉刷新， 那么需要设置该值为 true
                refreshing={this.props.refreshing}
                data={this.props.list}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.item}>
                            <Image
                                source={{ uri: item.imgUrl }}
                                style={styles.itemImage}
                            />
                            <View style={styles.info}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.desc}>{item.desc}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        )
    }
}
