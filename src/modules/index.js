import {combineReducers} from "redux";
import counter, {counterSaga} from "./counter";
import {all} from "redux-saga/effects";
import loading from "./loading";
import sample, {sampleSaga} from "./sample";

const rootReducer = combineReducers({
    loading,
    counter,
    sample,
});

export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;