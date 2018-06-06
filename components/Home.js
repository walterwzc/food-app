import React, { Component } from 'react'

import styles from '../styles/App'
import TabNavigator from 'react-native-tab-navigator'
import {
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render() {
        const { width } = Dimensions.get('window')
        const inputPosition = width * 0.625 * 0.75
        const inputWidth = width - 40
        const imgWidth = (width - 80) * 0.33

        return (
            <View style={styles.container}>
                <View style={styles.tabbar}>
                    <View style={styles.bannerArea}>
                        <StatusBar
                            backgroundColor="blue"
                            barStyle="light-content"
                        />
                        <Image
                            style={{ width, height: width * 0.625 }}
                            source={require('../resource/imgs/banner.png')}
                        />
                        <TextInput
                            underlineColorAndroid="transparent"
                            style={[
                                styles.input,
                                { top: inputPosition, width: inputWidth }
                            ]}
                            placeholder="请输入搜索内容"
                        />
                    </View>
                    <ScrollView style={styles.categories}>
                        <View style={styles.list}>
                            {this.state.list.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={item.id}
                                        onPress={() =>
                                            this.handleGotoList(item.id)
                                        }
                                    >
                                        <View style={styles.listItem}>
                                            <Image
                                                style={[
                                                    {
                                                        width: imgWidth,
                                                        height: imgWidth
                                                    },
                                                    styles.listImage
                                                ]}
                                                source={{ uri: item.imgUrl }}
                                            />
                                            <Text style={styles.listTitle}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }

    componentDidMount() {
        fetch('https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/index')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.handleGetListSucc(result)
            })
    }

    handleGetListSucc(result) {
        this.setState({
            list: result.data.categories
        })
    }

    handleGotoList(id) {
        this.props.nav.navigate('List', { id })
    }
}

export default Home
