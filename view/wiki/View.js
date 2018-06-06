import React from 'react'
import { connect } from 'react-redux'
import { getWikiInfo } from './actionCreator'
import Wiki from './Ui'

const mapState = state => {
    return {
        categories: state.wiki.categories
    }
}

const mapDispatch = dispatch => {
    return {
        getWikiInfo: () => {
            dispatch(getWikiInfo())
        }
    }
}

export default connect(mapState, mapDispatch)(Wiki)
