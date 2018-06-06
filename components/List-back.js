import React, { Component } from 'react'

import { View, Text, ScrollView, Image, FlatList } from 'react-native'

import styles from '../styles/list.style'

class List extends Component {
    static navigationOptions = {
        title: '美食列表',
        headerStyle: {
            backgroundColor: '#f00',
            height: 44
        },
        headerTintColor: '#000'
    }

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.list}>
                    {this.state.list.map((item, index) => (
                        <View style={styles.listItem} key={item.id}>
                            <View style={styles.listImg}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.imgUrl }}
                                />
                            </View>
                            <View style={styles.listInfo}>
                                <View style={styles.listTitle}>
                                    <Text style={styles.listTitleText}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={styles.listDesc}>
                                    <Text style={styles.listDescText}>
                                        {item.desc}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }

    componentDidMount() {
        alert(this.props.navigation)
        const url = this.props.navigation
            ? 'https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/categorylist'
            : 'https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/hotlist'
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    list: result.data.list
                })
            })
    }
}

export default List
