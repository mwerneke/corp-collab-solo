import axios from "axios"
import {takeLatest} from 'redux-saga/effects'


function* postVideo(action) {   
    try {
      const response = yield axios.post("/video", action.payload); //server.js express route 
      console.log(response.data);
      yield put({
        type: "FETCH_VIDEOS",
      });
    } catch (error) {
      console.log("Post Video Error", error);
    }
}

function* videoSaga(){
    yield takeLatest ("POST_VIDEO", postVideo)
}

export default videoSaga;