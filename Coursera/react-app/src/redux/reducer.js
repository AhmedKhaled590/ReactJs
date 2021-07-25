import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments: COMMENTS,
}

export const Reducer = (state = initialState, action) => {
    return state;
}