import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        width: '100%'
    },

    bannerArea: {
        width: '100%',
        alignItems: 'center'
    },

    input: {
        position: 'absolute',
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5
    },

    categories: {
        width: '100%',
        flex: 1
    },

    list: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },

    listItem: {
        width: '33.33333%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    listImage: {
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 10
    },

    listTitle: {
        fontSize: 12
    },

    tabbar: {
        flex: 1,
        backgroundColor: '#ccc'
    },

    body: {
        flex: 1
    },

    tabbarAndroid: {
        height: 44,
        backgroundColor: '#ccc'
    }
})

export default styles
