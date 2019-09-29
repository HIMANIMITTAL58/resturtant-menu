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

export function step1(value, columnName) {
    return {
      type: SELECT_MEAL,
      value: value,
      columnName: columnName
    };
}

export function step2(value, columnName) {
  return {
    type: SELECT_RESTURANT,
    value: value,
    columnName: columnName
  };
}


export function step3(selectedDish, numberOfServing) {
  if (selectedDish === '') {
    return {
      type: VALIDATION_ERROR,
      error: 'Plaese Select Dish'
    }
  }
  if (numberOfServing < 1) {
    return {
      type: VALIDATION_ERROR,
      error: 'Number of serving minimum 1'
    }
  }
  if (numberOfServing > 10) {
    return {
      type: VALIDATION_ERROR,
      error: 'Number of serving maximum 10'
    }
  }
  return {
    type: SELECT_DISHES_ADD,
    selectedDish: selectedDish,
    numberOfServing: numberOfServing
  };
}

export function selectOptions(value, columnName) {
  return {
    type: SELECT_DISHES_OPTION,
    value: value,
    columnName: columnName
  };
}

export function removeSelectedDish (i) {
  return {
    type: REMOVE_DISH,
    index: i,
  };
}

export function onSubmit(){
  return {
    type: ORDER_DELIVERD,
    success: "Order Delivered Soon",
  };
}

export function changeStep(value, changedType, state) {
  if(changedType !== 'PREVIOUS' && state){
    if(value === 2){
        if (state.selectMeal === '') {
        return {
          type: VALIDATION_ERROR,
          error: 'Plaese Select Meal'
        }
      }
      if (state.numberofPeople < 1) {
        return {
          type: VALIDATION_ERROR,
          error: 'Number of Peple minimum 1'
        }
      }
      if (state.numberofPeople > 10) {
        return {
          type: VALIDATION_ERROR,
          error: 'Number of Peple maximum 10'
        }
      }
    }
    else if(value === 3 && state.selectResturant === ''){
      return {
        type: VALIDATION_ERROR,
        error: 'Select the Resturtant'
      }
    }
    else if(value === 4 && state.selectedDishDetails.length === 0){
      return {
        type: VALIDATION_ERROR,
        error: 'Please Add Dish'
      }
    }
  }
  return {
    type: CHNAGED_PAGE,
    value: value,
    changedType: changedType
  };
}