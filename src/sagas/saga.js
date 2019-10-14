import { delay, put, takeLatest } from "redux-saga/effects";

function* ageUpAsync() {
    yield delay(4000);
    yield put({type: 'AGE_UP_ASYNC', value: 1})
}
// generator function
export function* watchAgeUp(){
    // 'takeEvery' everytime there is 'AGE_UP' call runs this fn
    // yield takeEvery('AGE_UP', ageUpAsync);
    // 'takeLatest' runs only the last or most recent call
    yield takeLatest('AGE_UP', ageUpAsync);

}