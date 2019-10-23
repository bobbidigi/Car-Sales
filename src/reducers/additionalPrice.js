import {REMOVE_FEATURE, BUY_ITEM} from '../actions/feature'

export default function additionalPrice(state = 0, action){
    switch (action.type){
        case REMOVE_FEATURE:
            return state - action.payload.price
        case BUY_ITEM:
            return state + action.payload.price
        default : 
        return state
    }
}