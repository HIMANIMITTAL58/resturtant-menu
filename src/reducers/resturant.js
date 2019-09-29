import {
	SELECT_MEAL,
	SELECT_RESTURANT,
	SELECT_DISHES_ADD,
	CHNAGED_PAGE,
	SELECT_DISHES_OPTION,
	VALIDATION_ERROR,
	ORDER_DELIVERD,
	REMOVE_DISH
  } from '../constants/actionTypes';
import { resturant } from './dishes'; 

  const defaultState = {
	resturantMenu: resturant.dishes,
	selectMeal: '',
	numberofPeople: 0,
	selectResturant: '',
	selectedDishDetails: [],
	listofDishes: [],
	listOfResturant: [],
	selectedDish: '',
	numberOfServing: 1,
	step: 1,
	errors: '',
	success: '',
	listofMeals: [
		{name: 'Breakfast', value: 'breakfast'},
		{name: 'Lunch', value: 'lunch'},
		{name: 'Dinner', value: 'dinner'}
	]
  };
  
const listOfResturant = (state, action) => {
	const resturantMenu = JSON.parse(JSON.stringify(state.resturantMenu));

	let resturant = [];
	if(action.columnName === 'selectMeal' ){
		resturantMenu.filter(item => {
			item.availableMeals.filter(availableMeals => {
				if(availableMeals === action.value){
					resturant.push(item);
				};
			});
		});
		const uniqueNames = getUnique(resturant,'restaurant')

		return uniqueNames;
	}
	return state.listOfResturant
}

function getUnique(resturant, key) {

	const unique = resturant
		 .map(item => item[key])
  
	  .map((item, index, final) => final.indexOf(item) === index && index)
  
	  .filter(item => resturant[item]).map(item => resturant[item]);
  
	 return unique;
  }


const listofDishes = (state, action) => {
	const resturantMenu = JSON.parse(JSON.stringify(state.resturantMenu));
	let dishes = [];
	resturantMenu.filter(item => {
		if(item.restaurant === action.value){
			dishes.push(item);
		};
	});
	return dishes;
}

const selectedDishesh = (state, action) => {
	const selectedDishDetails = JSON.parse(JSON.stringify(state.selectedDishDetails));

	selectedDishDetails.push({
		dishName: action.selectedDish,
		quantity: action.numberOfServing,
	})
	state.selectedDish = '';
	state.numberOfServing = 1;

	return selectedDishDetails
}

const removeSelectedDish = (state, action) => {
	let selectedDishDetails = JSON.parse(JSON.stringify(state.selectedDishDetails));
	selectedDishDetails = selectedDishDetails.filter((item , i) => i !== action.index);

	return selectedDishDetails
}

  export default function (state = defaultState, action) {

		switch(action.type) {
			case SELECT_MEAL:
				return {
					...state,
					[action.columnName]: action.value,
					listOfResturant: listOfResturant(state, action),
					selectedDishDetails: [],
					selectResturant: '',
					selectedDish: '',
					numberOfServing: 1,
					errors: '',
				};
			case SELECT_RESTURANT:
				return {
					...state,
					[action.columnName]: action.value,
					listofDishes: listofDishes(state, action),
					selectedDishDetails: [],
					selectedDish: '',
					numberOfServing: 1,
					errors: '',
				};
			case SELECT_DISHES_OPTION:
				return {
					...state,
					[action.columnName]: action.value,
					errors: '',
				};
			case SELECT_DISHES_ADD:
				return {
					...state,
					selectedDishDetails: selectedDishesh(state, action),
					errors: '',
				};
			case CHNAGED_PAGE:
				return {
					...state,
					step: action.value,
					errors: '',
					success: '',
				}
			case REMOVE_DISH: 
				return {
					...state,
					selectedDishDetails: removeSelectedDish(state, action)
				}
			case VALIDATION_ERROR:
					return {
						...state,
						errors: action.error,
						success: '',
				}
			case ORDER_DELIVERD:
					return {
						...state,
						errors: '',
						success: action.success,
					}
			default: 
				return state;
		}
	}  
  