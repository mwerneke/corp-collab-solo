import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* videoDelete(action) {
  try {
    console.log("*****", action);
    const detail = yield axios.delete(`/api/video/${action.payload}`); //is this right or wrong?
    console.log("get ticket Detail:", detail.data);
    yield put({
      type: "FETCH_VIDEOS",
    });
  } catch {
    console.log("get ticketDetail error");
  }
}

function* deleteVideo() {
  yield takeLatest("DELETE_VIDEO", videoDelete);
}

export default deleteVideo;
