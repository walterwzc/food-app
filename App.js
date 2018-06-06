import React from 'react'
import Home from './view/home/View'
import List from './view/list/View'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/'

const RouteApp = StackNavigator({
    Home: { screen: Home },
    List: { screen: List }
})

const App = props => {
    return (
        <Provider store={store}>
            <RouteApp />
        </Provider>
    )
}

export default App
