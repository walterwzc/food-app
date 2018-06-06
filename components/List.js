import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../store/actionTypes'
import PropTypes from 'prop-types'

import { View, Text, ScrollView, Image, FlatList } from 'react-native'

import styles from '../styles/list.style'

const mapStateToProps = (state, props) => {
    return {
        list: state
    }
}

const handleGetData = (url, dispatch, type) => {
    return () => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                // this.setState((prevState) => (
                //   {
                //     list: [...result.data.list, ...prevState.list],
                //     refreshing: false
                //   }
                // ))
                dispatch({
                    type,
                    payload: result.data.list
                })
            })
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        firstload(url) {
            dispatch(handleGetData(url, dispatch, types.FIRST_LOAD))
        },
        refreshload(url) {
            dispatch(handleGetData(url, dispatch, types.REFRESH_LOAD))
        }
    }
}

class List extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    static navigationOptions = {
        title: '美食列表',
        headerStyle: {
            backgroundColor: '#f00',
            height: 44
        },
        headerTintColor: '#000'
    }

    constructor(props, context) {
        super(props)
        this.state = {
            // list: [],
            refreshing: false,
            from: ''
        }
        this.store = context.store
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    keyExtractor={(item, index) => String(index)}
                    refreshing={this.state.refreshing}
                    onRefresh={() => this.handleRefresh()}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
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
                    )}
                />
            </View>
        )
    }

    componentDidMount() {
        // this.handleGetData()
        const url = this.props.navigation
            ? 'https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/categorylist'
            : 'https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/hotlist'
        this.setState({
            from: url
        })
        this.props.firstload(url)
    }

    // handleGetData() {
    //   const url = this.props.navigation
    //   ? 'http://www.gp5.com/list.json'
    //   : 'http://www.gp5.com/list-2.json'
    //   fetch(url)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState((prevState) => (
    //       {
    //         list: [...result.data.list, ...prevState.list],
    //         refreshing: false
    //       }
    //     ))
    //   })
    // }

    handleRefresh() {
        // this.handleGetData()
        this.props.refreshload(this.state.from)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
