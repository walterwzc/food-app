import { changeSelectedType } from './actionTypes'

export const selectedTabAction = (value) => ({
	type: changeSelectedType,
	value: value
})