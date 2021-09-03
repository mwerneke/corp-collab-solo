import axios from "axios"
import {takeLatest} from 'redux-saga/effects'

function* fetchVideos() { 
 
    try {
      const videos = yield axios.get("/video");
      console.log("get all:", videos.data);
      yield put({
        type: "SET_VIDEOS",
        payload: videos.data,
      });
    } catch {
      console.log("get all error");
    }
  }


function* fetchSaga(){
    yield takeLatest ("FETCH_VIDEOS", fetchVideos)
}

export default fetchSaga;