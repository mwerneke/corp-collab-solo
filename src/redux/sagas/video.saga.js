import axios from "axios"
import {takeLatest, put} from 'redux-saga/effects'


function* postVideo(action) {   
    try {
      console.log(action, 'MICHAELMICHAEL');
      const response = yield axios.post("/api/video", {key:action.payload}); //server.js express route 
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