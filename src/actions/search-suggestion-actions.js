import { TOOGLING_SEARCH_SUGGESTIONS,TOOGLING_SEARCH_SELECTED,UPDATE_SEARCH_VALUE,Handle_FOCUS } from '../constants/action-types';

export const searchSuggestion = (enable)=>{
	return {
		type:TOOGLING_SEARCH_SUGGESTIONS,
		enable
	};
} 
export const selectedSearch = (searchSelected,enable)=>{
	return {
		type:TOOGLING_SEARCH_SUGGESTIONS,
		searchSelected,
		enable
	}
} 
export const updateSearchValue = (searchValue) =>{
	return {
		type:UPDATE_SEARCH_VALUE,
		searchValue
	}
}

export const handleDownArrow = (activeIndex) =>{
	console.log(activeIndex)
	return {
		type:Handle_FOCUS,
		activeIndex
	}
}