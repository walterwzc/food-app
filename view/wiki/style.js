import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    search: {
        position: 'absolute',
        left: 20,
        right: 20,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    content: {
        flex: 1,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        display: 'flex'
    },
    itemImg: {
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 20
    },
    itemTitle: {
        lineHeight: 30,
        height: 30,
        textAlign: 'center'
    }
})

export default styles
