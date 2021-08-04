import { combineReducers, createStore, applyMiddleware } from "redux";
import { Comments } from "./Comments";
import { Dishes } from "./Dishes";
import { Leaders } from "./Leaders";
import { Promotions } from "./Promotions";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
            comments: Comments,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}