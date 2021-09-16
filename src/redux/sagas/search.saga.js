import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* searchVideo(action) {
  try {
    // console.log('MIKEMIKEMIKE',action);
    // const paramsToPass= {searchWord:action.payload}
    const response = yield axios.get(`/api/search/${action.payload}`);
    // {
    //   searchWord: action.payload,
    // });

    //    params: {searchWord: action.payload}

    yield put({
      type: "SEARCH_VIDEO",
      payload: response.data,
    });
  } catch (error) {
    console.log("searchVideo error", error);
  }
}

function* searchSaga() {
  yield takeLatest("SEARCH_VIDEO_SAGA", searchVideo);
}

export default searchSaga;
