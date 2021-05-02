import { ADD_TO_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET, SET_ID } from './actions'

export const initialState = {
    basket: [],
    Id:null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

const reduce = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case EMPTY_BASKET:
            return {
                ...state,
                basket: []
            }

        case REMOVE_FROM_BASKET:
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket]

            if(index >= 0) {
                newBasket.splice(index, 1)
            }
            else{
                console.warn(
                    `Can not remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case SET_ID:
            return{
                ...state,
                Id: action.id
            }

        default:
            return state
    }
}

export default reduce