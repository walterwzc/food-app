import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'

import styles from './style'

class Setting extends Component {
    render() {
        const { isSwitched, handleValueChange } = this.props
        return (
            <View style={styles.nearSwitch}>
                <Text style={styles.nearSwitchText}>美食地图</Text>
                <Switch
                    value={isSwitched}
                    onValueChange={value => handleValueChange(value)}
                />
            </View>
        )
    }
}

export default Setting
