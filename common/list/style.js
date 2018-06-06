import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	item: {
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 5,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	itemImage: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		width: 80,
		height: 80
	},
	info: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center'
	},
	title: {
		lineHeight: 18,
		fontSize: 12
	},
	desc: {
		lineHeight: 16,
		fontSize: 12
	}
})

export default styles